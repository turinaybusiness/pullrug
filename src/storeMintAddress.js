document.getElementById("rugForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form reloading

  const mintInput = document.getElementById("rugInput").value.trim();
  console.log(`Input length: ${mintInput.length}`); // Debug: Log the input length
  console.log(`Input value: "${mintInput}"`); // Debug: Log the input value
  if (mintInput.length === 44 && mintInput.endsWith("pump")) {
    try {
      const response = await fetch("/api/store-mint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: mintInput }),
      });

      if (!response.ok) {
        throw new Error("Failed to store address");
      }

      alert("Thank you for helping train our model!");
      document.getElementById("rugInput").value = ""; // Clear the input
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  } else {
    alert(
      "Invalid Mint Address! Ensure it is 48 characters long and ends with 'pump'."
    );
  }
});
