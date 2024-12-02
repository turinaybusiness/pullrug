document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rugForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const mintInput = document.getElementById("rugInput").value.trim();

    try {
      const response = await fetch("/api/store-mint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: mintInput }),
      });

      const data = await response.json();

      if (response.ok) {
        // Display the thank-you message
        thankYouMessage.textContent =
          data.message || "Thank you for helping train our model!";
        thankYouMessage.style.display = "block";
      } else {
        // Display an error message
        thankYouMessage.textContent =
          data.error || "An error occurred. Please try again.";
        thankYouMessage.style.display = "block";
      }
    } catch (error) {
      console.error("Error submitting Mint address:", error);
      // Display a generic error message
      thankYouMessage.textContent = "An error occurred. Please try again.";
      thankYouMessage.style.display = "block";
    }
  });
});
