document.addEventListener("DOMContentLoaded", () => {
  const connectAccountButton = document.getElementById("connectAccount");
  const form = document.getElementById("rugForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  // Load the audio file

  connectAccountButton.addEventListener("click", function () {
    window.open("https://x.com/Pazyrykfirstrug", "_blank");
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const mintInput = document.getElementById("rugInput").value.trim();

    // Special behavior for the specific Mint address
    if (mintInput === "3xQnWtcvD2vdWDNDbkJxWviYVgRpTJdz3pnM8gyKpump") {
      // Play the sound
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");

      // Display the special message
      thankYouMessage.textContent =
        "Never gonna let you down, never gonna let you go!";
      thankYouMessage.style.display = "block";
      thankYouMessage.style.color = "white"; // Optional styling
      return; // Stop further form submission
    }

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
        thankYouMessage.textContent = data.error || "Please Enter Valid Token.";
        thankYouMessage.style.display = "block";
      }
    } catch (error) {
      console.error("Error submitting Mint address:", error);
      // Display a generic error message
      thankYouMessage.textContent = "Please Enter Valid Token.";
      thankYouMessage.style.display = "block";
    }
  });
});
