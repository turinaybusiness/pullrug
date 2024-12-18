import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as CANNON from "cannon-es";
import CannonDebugger from "cannon-es-debugger";
import { gsap } from "gsap";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

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
const rgbeLoader = new RGBELoader();
// rgbeLoader.load("/sky.hdr", (environmentMap) => {
//   environmentMap.mapping = THREE.EquirectangularReflectionMapping;

//   scene.background = environmentMap;

//   // scene.environment = environmentMap
// });

let mixer = null;
let charBody,
  action2,
  action3,
  characterModel,
  carpetModel,
  carpetMesh,
  characterpos,
  charShape;
const charscale = 0.05;
gltfLoader.load("/models/carpet.glb", (gltf) => {
  carpetModel = gltf.scene;

  carpetModel.scale.set(charscale, charscale, charscale);
  carpetModel.traverse((child) => {
    if (child.isMesh) {
      child.receiveShadow = true; // Carpet receives shadows
    }
  });
  //   scene.add(carpetModel);
});
gltfLoader.load("/models/chracter8.glb", (gltf) => {
  console.log(
    "Available animations:",
    gltf.animations.map((anim) => anim.name)
  );
  characterModel = gltf.scene;
  characterpos = gltf.scene.getObjectByName("Empty");
  animeteModel();
  gltf.scene.scale.set(charscale, charscale, charscale);
  scene.add(gltf.scene);
  carpetMesh = gltf.scene.getObjectByName("carpet");
  carpetMesh.receiveShadow = true;

  const geometry = gltf.scene.getObjectByName("model_0").geometry; // Assuming the first child contains the geometry
  console.log(geometry);
  geometry.castShadow = true;
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
  charShape = new CANNON.Trimesh(scaledVertices, Array.from(indices));

  // Create the physics body with Trimesh
  charBody = new CANNON.Body({
    mass: 0, // Dynamic body
    shape: charShape,
    position: new CANNON.Vec3(0, 1, 0), // Set initial position
  });
  world.addBody(charBody);
  if (gltf.animations.length > 0) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    const action = mixer.clipAction(gltf.animations[2]);
    action.loop = THREE.LoopRepeat;
    action.play();
    action2 = mixer.clipAction(gltf.animations[0]);
    action2.loop = THREE.LoopRepeat;
    action2.play();
    action3 = mixer.clipAction(gltf.animations[1]);
  }
});
function animeteModel() {
  // Reset groundBody position
  // characterModel.position.set(0, 0, 0);

  // Reset carpetModel position
  gsap.fromTo(
    characterpos.position,
    // From: Starting position
    { x: 400, y: 0, z: 0 }, // Example starting position
    // To: Target position
    {
      duration: 2,
      x: 0,
      y: -20,
      z: 0,
      ease: "power2.out",
    }
  );
}

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
  60,
  sizes.width / sizes.height,
  0.1,
  3000
);
camera.position.set(0, 4, 15);
scene.add(camera);
// camera.rotation.x = -Math.PI / 12;
// Update camera position dynamically
const controls = new OrbitControls(camera, canvas);
// controls.target.y = 3.5
controls.enableDamping = true;
controls.enableRotate = false;
// Set limits for vertical rotation (y-axis)
controls.minPolarAngle = Math.PI / 4; // Lower limit (45 degrees)
controls.maxPolarAngle = Math.PI / 2; // Upper limit (90 degrees)

// Optional: Prevent zoom or panning if needed
controls.enableZoom = false; // Allow zooming (set to false to disable)
controls.enablePan = false; // Allow panning (set to false to disable)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(0x3f3f3f, 0);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Physics world
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);
// Create a static ground body
const groundBody = new CANNON.Body({
  mass: 0, // Static bodies have zero mass
  shape: new CANNON.Plane(),
});
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // Rotate to match Three.js orientation
world.addBody(groundBody);
groundBody.position.y = -6;
let resetTimer = null;

// Carpet sliding boundaries
const carpetMinX = -1000; // Left limit
const carpetMaxX = 1000; // Right limit
function recreateBodyWithNewMass(newMass) {
  // Save current position and velocity
  const position = charBody.position.clone();
  const velocity = charBody.velocity.clone();

  // Remove the old body
  world.removeBody(charBody);

  // Create a new body with the updated mass
  charBody = new CANNON.Body({
    mass: newMass, // New mass
    shape: charShape,
    position: position, // Keep current position
  });
  charBody.velocity.copy(velocity); // Keep current velocity
  world.addBody(charBody);

  console.log("Body recreated with new mass:", newMass);
}
var animationValue = 0.35;

function moveLeft() {
  console.log('moveLeft called');
  if (!mixer) {
    console.error("Mixer not initialized. Ensure the model has animations.");
    return;
  }

  // Stop the current animation

  if (!action2) {
    console.error("Action2 animation not found.");
    return;
  }


  // Play the "fall" animation

  if (!action3) {
    console.error("Fall animation not found.");
    return;
  }
    action2.stop(); // Stop "Armature|mixamo.com|Layer0"
  animationValue = 2;
  action3.loop = THREE.LoopOnce; // Play only once
  action3.clampWhenFinished = true; // Stop the animation at the last frame
  action3.reset(); // Reset the animation to the start
  action3.play(); // Play the animation

  recreateBodyWithNewMass(1);

  const targetX = THREE.MathUtils.clamp(
    carpetMesh.position.x - 1000, // Move left by 500 units
    carpetMinX,
    carpetMaxX
  );

  gsap.to(carpetMesh.position, {
    duration: 3,
    x: targetX,
    delay: 0.05,
    ease: "power2.out",
  });

  // Reset the timer to return positions after 4.5 seconds
  if (resetTimer) {
    clearTimeout(resetTimer);
  }
  resetTimer = setTimeout(resetPositions, 4000); // Reset after 4.5 seconds
}

// Add event listener to the button
// document.getElementById("checkRisk").addEventListener("click", moveLeft);

function resetPositions() {
  animationValue = 0.35;
  if (!action2 || !action3) {
    console.error("Required animations not found.");
    return;
  }

  // Reset action3 to its initial state
  action3.stop();
  action3.reset();

  // Play the default animation (action2)
  action2.loop = THREE.LoopRepeat; // Set to loop
  action2.reset(); // Reset to the start
  action2.play(); // Play the animation
  recreateBodyWithNewMass(0);
  carpetMesh.position.x = 0;
  animeteModel();
  // Reset groundBody position

  // Reset carpetModel position
  gsap.to(carpetMesh.position, {
    duration: 0.5,
    x: 0,
    y: 0,
    z: 0,
    ease: "power2.out",
  });

  // Reset other objects if needed (e.g., characterModel)
  if (charBody) {
    charBody.position.set(0, 1, 0);
    charBody.velocity.set(0, 0, 0); // Stop any movement
  }
}

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
    mixer.update(deltaTime * animationValue);
    
  }

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
document.addEventListener("DOMContentLoaded", () => {
  const checkRiskButton = document.getElementById("checkRisk");
  const riskResultDiv = document.getElementById("riskResult");

  checkRiskButton.addEventListener("click", async () => {
    const pumpAddress = document.getElementById("checkInput").value.trim();

    // Clear previous results
    riskResultDiv.textContent = "";

    if (!pumpAddress) {
      riskResultDiv.textContent = "Please enter a token address.";
      return;
    }

    try {
      const response = await fetch(`https://snitcharugbot-1.onrender.com/analyze?token=${encodeURIComponent(pumpAddress)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch token analysis.");
      }

      const data = await response.json();

      if (data.status === "success") {
        const { risk_level, risk_score, risk_factors } = data.data;
        riskResultDiv.innerHTML = `
          <p>Risk Level: ${risk_level}</p>
          <p>Risk Score: ${risk_score.toFixed(2)}</p>
        
        `;

        if (data.status === 'success' && (data.data.risk_level !== 'LOW')) {
          moveLeft();
        }
      }else {
        riskResultDiv.textContent = `Error: ${data.error}`;
      }
    } catch (error) {
      riskResultDiv.textContent = `Error: ${error.message}`;
    }
  });
});