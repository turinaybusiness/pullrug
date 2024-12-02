import { createClient } from "@vercel/edge-config";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { address } = req.body;

  if (!address || address.length !== 44 || !address.endsWith("pump")) {
    return res.status(400).json({ error: "Invalid Mint Address" });
  }

  try {
    const edgeConfig = createClient({
      id: process.env.EDGE_CONFIG_ID,
    });

    const timestamp = new Date().toISOString();
    const key = `mint:${timestamp}`; // Use a timestamp as the unique key

    await edgeConfig.set(key, { address, timestamp });

    return res.status(200).json({ message: "Address stored successfully" });
  } catch (error) {
    console.error("Error storing in Edge Config:", error);
    return res.status(500).json({ error: "Failed to store Mint Address" });
  }
}
