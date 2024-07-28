import { NextApiRequest, NextApiResponse } from "next";

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const API_KEY = process.env.CONVERTKIT_API_KEY; // Store this in your environment variables
    const FORM_ID = process.env.CONVERTKIT_FORM_ID; // Store this in your environment variables

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to subscribe");
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "" });
  }
};

export default subscribe;
