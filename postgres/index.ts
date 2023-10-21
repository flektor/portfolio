import { sql } from "@vercel/postgres";

export function insertMessage(
  data: { name: string; pronouns: string; email: string; content: string },
) {
  return sql`INSERT INTO Messages (Name, Pronouns, Email, Content)
      VALUES (${data.name}, ${data.pronouns}, ${data.email}, ${data.content});`;
}

function createMessagesTable() {
  return sql`CREATE TABLE Messages (
      MessageID SERIAL PRIMARY KEY,
      Name VARCHAR(255) NOT NULL,
      Pronouns VARCHAR(255),
      Email VARCHAR(255) UNIQUE NOT NULL,
      Content TEXT,
      DateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
}

function getMessages() {
  return sql`SELECT MessageID, Name, Email, DateTime, Content FROM Messages`;
}
