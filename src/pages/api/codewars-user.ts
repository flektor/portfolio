import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "codewars-api-types/v1";

export type UserDataResponse = {
  user: User;
} | {
  error: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<UserDataResponse>,
) {
  try {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${req.query.username}`,
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
