// import { sql } from "@vercel/postgres";
import type { NextApiRequest, NextApiResponse } from "next";
import PronounsValues, {
  Pronouns,
} from "../../../components/Contact/pronouns-values";

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateEmail(email: string) {
  return String(email).toLowerCase().match(emailRegex);
}

export type ContactMessageRequest = {
  email: string;
  name: string;
  pronouns: Pronouns;
  content: string;
};

export type ContactMessageError = {
  message:
    | "Invalid email"
    | "Invalid name"
    | "Invalid content"
    | "Invalid pronouns";
};

export type ValidetedInput = {
  data: ContactMessageRequest;
  error?: ContactMessageError;
} | {
  data?: ContactMessageRequest;
  error: ContactMessageError;
};

function isNotValidString(str: string) {
  return !str || str.trim() === "" || typeof str !== "string";
}

export function validateInput(
  data: ContactMessageRequest,
): ValidetedInput {
  if (isNotValidString(data.name)) {
    return { error: { message: "Invalid name" } };
  }

  // if (!data.pronouns || !Object.keys(PronounsValues).includes(data.pronouns)) {
  //   return { error: { message: "Invalid pronouns" } };
  // }

  if (!data.email || !validateEmail(data.email)) {
    return { error: { message: "Invalid email" } };
  }

  if ((isNotValidString(data.content))) {
    return { error: { message: "Invalid content" } };
  }

  return { data };
}

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { data, error } = validateInput(req.body);

  if (error || !data) {
    return res.status(405).send({ error });
  }

  console.log(data);
  //   if (r) {
  //   const likes = 100;
  //   const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;

  res.json(true);
  //   }
}
