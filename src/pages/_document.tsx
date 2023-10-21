import { Head, Html, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth bg-[#111827]" id="intro">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
