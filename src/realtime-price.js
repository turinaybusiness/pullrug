const ws = new WebSocket("wss://pumpportal.fun/api/data");

ws.onopen = function open() {
  // Subscribing to token creation events
  let payload = {
    method: "subscribeNewToken",
  };
  ws.send(JSON.stringify(payload));

  // Subscribing to trades made by accounts
  payload = {
    method: "subscribeAccountTrade",
    keys: ["AArPXm8JatJiuyEffuC1un2Sc835SULa4uQqDcaGpAjV"], // array of accounts to watch
  };
  ws.send(JSON.stringify(payload));

  // Subscribing to trades on tokens
  payload = {
    method: "subscribeTokenTrade",
    keys: ["91WNez8D22NwBssQbkzjy4s2ipFrzpmn5hfvWVe2aY5p"], // array of token CAs to watch
  };
  ws.send(JSON.stringify(payload));
};

ws.onmessage = function message(event) {
  try {
    const data = JSON.parse(event.data);

    // Extract name and mint from the received data
    const { name, mint } = data;

    if (name && mint) {
      // Create a new div to display the data
      const outputDiv = document.createElement("div");
      outputDiv.classList.add("leaderboard-item"); // Add a class for styling

      // Set the inner HTML to separate name and mint into two lines
      outputDiv.innerHTML = `<strong>Name:</strong> ${name}<br><strong>Mint:</strong> ${mint}`;

      // Append the div to the top of the container, but below the <h2>
      const container = document.querySelector(".output-container");
      if (container) {
        const totalItems = container.childElementCount - 1; // Ignore the heading
        // Apply alternating styles based on the total number of items
        if (totalItems % 2 === 0) {
          outputDiv.classList.add("light");
        } else {
          outputDiv.classList.add("dark");
        }

        // Insert the new element just after the <h2>
        container.insertBefore(outputDiv, container.children[1]);
      } else {
        console.warn("Output container not found");
      }
    }
  } catch (error) {
    console.error("Error processing message:", error);
  }
};

ws.onerror = function error(event) {
  console.error("WebSocket error observed:", event);
};

ws.onclose = function close() {
  console.log("WebSocket connection closed");
};
