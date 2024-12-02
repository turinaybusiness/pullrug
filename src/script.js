import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as CANNON from "cannon-es";
import CannonDebugger from "cannon-es-debugger";
import { gsap } from "gsap";
/**
 * Base
 */
// Debug
// const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Models
 */

const gltfLoader = new GLTFLoader();

let mixer = null;
let charBody, characterModel, carpetModel;
const charscale = 0.05;
gltfLoader.load("/models/carpet.glb", (gltf) => {
  carpetModel = gltf.scene;
  carpetModel.scale.set(charscale, charscale, charscale);
  scene.add(carpetModel);
});
gltfLoader.load("/models/wave.glb", (gltf) => {
  characterModel = gltf.scene;
  gltf.scene.scale.set(charscale, charscale, charscale);
  scene.add(gltf.scene);

  // Extract geometry from the GLB model
  const geometry = gltf.scene.children[0].children[0].geometry; // Assuming the first child contains the geometry
  console.log(geometry);
  // Convert THREE.js geometry to Cannon.js Trimesh
  const vertices = geometry.attributes.position.array; // Get vertices
  const indices = geometry.index.array; // Get face indices

  // Apply scaling to vertices
  const scale = charscale; // Match the visual scale
  const scaledVertices = Array.from(vertices).map(
    (v, i) =>
      i % 3 === 0
        ? v * scale // X-coordinate
        : i % 3 === 1
        ? v * scale // Y-coordinate
        : v * scale // Z-coordinate
  );

  // Create Trimesh with scaled vertices
  const charShape = new CANNON.Trimesh(scaledVertices, Array.from(indices));

  // Create the physics body with Trimesh
  charBody = new CANNON.Body({
    mass: 1, // Dynamic body
    shape: charShape,
    position: new CANNON.Vec3(0, 1, 0), // Set initial position
  });
  world.addBody(charBody);
  if (gltf.animations.length > 0) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    const action = mixer.clipAction(gltf.animations[0]);
    action.loop = THREE.LoopRepeat;
    action.play();
  }
});

/**
 * Floor
 */
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({
    color: "#444444",
    metalness: 0,
    roughness: 0.5,
  })
);
floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;
// scene.add(floor);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.bottom = -7;
directionalLight.position.set(-5, 5, 0);
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  3000
);
camera.position.set(0, 4, 10);
scene.add(camera);
camera.rotation.x = -Math.PI / 12;
// Update camera position dynamically

// Controls;
// const controls = new OrbitControls(camera, canvas);
// // controls.target.set(0, 0.75, 0);
// controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Physics world
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

const groundBody = new CANNON.Body({
  mass: 0, // Static body
  shape: new CANNON.Plane(), // Infinite plane in Cannon.js
  position: new CANNON.Vec3(0, 0, 0), // Positioned at the origin
});
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(groundBody);
groundBody.type = CANNON.Body.KINEMATIC;
// groundBody.velocity.set(0, -1, 0);
function animateGroundPosition(newPosition) {
  const startPosition = groundBody.position.clone(); // Clone current position
  const targetPosition = newPosition.clone(); // Target position

  // Use GSAP to animate the position
  gsap.to(startPosition, {
    duration: 1, // Animation duration (1 second)
    delay: 0.25,
    x: targetPosition.x,
    y: targetPosition.y,
    z: targetPosition.z,
    ease: "power2.out",
    onUpdate: () => {
      // Update groundBody position during animation
      groundBody.position.set(
        startPosition.x,
        startPosition.y,
        startPosition.z
      );
    },
  });
}

// Example usage
// updateGroundPosition(new CANNON.Vec3(-6, 0, 0));

// Variables to track mouse/touch interaction
let isDragging = false;
let startX = 0;
let currentX = 0;
let deltaX = 0;

// Carpet sliding boundaries
const carpetMinX = -10; // Left limit
const carpetMaxX = 10; // Right limit

// Mouse events
window.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX; // Track starting point
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  currentX = e.clientX;
  deltaX = currentX - startX; // Calculate the movement delta

  if (deltaX < 0) {
    // Move left
    animateGroundPosition(new CANNON.Vec3(0, -20, 0));
    const targetX = THREE.MathUtils.clamp(
      carpetModel.position.x - 5, // Move left by 1 unit
      carpetMinX,
      carpetMaxX
    );

    gsap.to(carpetModel.position, {
      duration: 0.5,
      x: targetX,
      ease: "power2.out",
    });
  } else if (deltaX > 0) {
    // Move right
    animateGroundPosition(new CANNON.Vec3(0, -20, 0));
    const targetX = THREE.MathUtils.clamp(
      carpetModel.position.x + 5, // Move right by 1 unit
      carpetMinX,
      carpetMaxX
    );

    gsap.to(carpetModel.position, {
      duration: 0.5,
      x: targetX,
      ease: "power2.out",
    });
  }

  startX = currentX; // Update starting point
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

// Touch events
window.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX; // Track starting point
});

window.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  currentX = e.touches[0].clientX;
  deltaX = (currentX - startX) * 0.01; // Scale movement
  const newPositionX = THREE.MathUtils.clamp(
    groundBody.position.x + deltaX,
    carpetMinX,
    carpetMaxX
  );

  updateGroundPosition(
    new CANNON.Vec3(newPositionX, groundBody.position.y, groundBody.position.z)
  );
  startX = currentX; // Update starting point
});

window.addEventListener("touchend", () => {
  isDragging = false;
});

/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;
const cannonDebugger = new CannonDebugger(scene, world, {
  color: 0x00ff00, // Debug wireframe color
});
const tick = () => {
  const delta = clock.getDelta();
  world.step(1 / 60, delta);

  // Sync Three.js and Cannon.js objects
  if (charBody && characterModel) {
    characterModel.position.copy(charBody.position);
    characterModel.quaternion.copy(charBody.quaternion);
  }
  // Sync the carpetMesh position and rotation with carpetBody
  //   carpetMesh.position.copy(groundBody.position);
  //   carpetMesh.quaternion.copy(groundBody.quaternion);
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;
  // Update CannonDebugger
  //   cannonDebugger.update();
  // Model animation
  if (mixer) {
    mixer.update(deltaTime * 0.35);
  }

  // Update controls
  //   controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
