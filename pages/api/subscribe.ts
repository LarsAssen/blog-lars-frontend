import { NextApiRequest, NextApiResponse } from "next";
import { BeehiivClient } from "@beehiiv/sdk";

const beehiiv = new BeehiivClient({
  apiKey: process.env.BEEHIIV_API_KEY!,
});

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
      const publicationId = "your_publication_id_here"; // Replace with your actual publication ID
      const response = await beehiiv.subscriptions.create(publicationId, {
        email,
        reactivateExisting: false,
        sendWelcomeEmail: true,
      });

      return res
        .status(200)
        .json({ message: "Subscription successful", data: response });
    } catch (error) {
      console.error("Error subscribing:", error);
      return res.status(500).json({ error: "Subscription failed" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
