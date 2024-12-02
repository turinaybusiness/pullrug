document.getElementById("rugForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent form reload

  const mintInput = document.getElementById("mintInput").value.trim();

  try {
    const response = await fetch("/api/store-mint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address: mintInput }),
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById("responseMessage").textContent = data.message;
    } else {
      document.getElementById("responseMessage").textContent = data.error;
    }

    document.getElementById("responseMessage").style.display = "block";
  } catch (error) {
    console.error("Error submitting Mint address:", error);
    alert("An error occurred. Please try again.");
  }
});
