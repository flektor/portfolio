import { NextApiRequest, NextApiResponse } from "next";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await fetch(
      "https://github.com/flektor/codewars-katas/blob/main/JavaScript/4kyu__so_many_permutations.js",
    );
    const data = await response.json();
    const rawLines = data.payload.blob.rawLines;
    const code = rawLines.join("\n");
    res.status(200).json(code);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
