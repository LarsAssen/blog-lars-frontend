import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        "https://api.beehiiv.com/v2/publications/pub_9d5cd97c-e7f4-4fdf-a769-dfbfcc349356?expand=stat_active_subscriptions",
        {
          headers: {
            Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        }
      );
      const data = await response.json();
      console.log("Response data:", data);
      if (response.ok) {
        res.status(200).json({ count: data });
      } else {
        res.status(500).json({ error: "Failed to fetch subscriber count" });
      }
    } catch (error) {
      console.error("Error fetching subscriber count:", error);
      res.status(500).json({ error: "Failed to fetch subscriber count" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
