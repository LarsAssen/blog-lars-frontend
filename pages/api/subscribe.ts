import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const response = await fetch(
        "https://api.beehiiv.com/v2/publications/pub_9d5cd97c-e7f4-4fdf-a769-dfbfcc349356/subscriptions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
          },
          body: JSON.stringify({
            email,
            reactivate_existing: false,
            send_welcome_email: true,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        return res
          .status(200)
          .json({ message: "Subscription successful", data });
      }
      return res
        .status(500)
        .json({ error: "Subscription failed", details: data });
    } catch (error) {
      console.error("Error subscribing:", error);
      return res.status(500).json({ error: "Subscription failed" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
