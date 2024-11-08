import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        "https://api.beehiiv.com/v2/publications/pub_9d5cd97c-e7f4-4fdf-a769-dfbfcc349356",
        {
          headers: {
            Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log("Response data:", data);
      if (response.ok) {
        const subscriberCount = data.publication?.subscriber_count;
        res.status(200).json({ count: subscriberCount });
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
