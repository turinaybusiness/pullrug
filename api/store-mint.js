import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Neon SSL connections
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { address } = req.body;

  // Validate the input: 44 characters and ends with "pump"
  if (!address || address.length !== 44 || !address.endsWith("pump")) {
    return res.status(400).json({ error: "Invalid Mint Address" });
  }

  try {
    // Insert the address into the database
    const result = await pool.query(
      "INSERT INTO mint_addresses (address) VALUES ($1) RETURNING *",
      [address]
    );

    res.status(200).json({
      message: "Address stored successfully",
      data: result.rows[0], // Return the inserted row
    });
  } catch (error) {
    console.error("Error storing Mint address:", error);

    if (error.code === "23505") {
      // Duplicate address error
      return res.status(400).json({ error: "Address already exists" });
    }

    res.status(500).json({ error: "Failed to store Mint Address" });
  }
}
