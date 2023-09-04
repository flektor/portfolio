import Image from "next/image";
import React, { useState } from "react";
import Copy from "../Icons/Copy";

export default function Footer() {
  const [showClipboardMessage, setShowClipboardMessage] = useState(false);

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    setShowClipboardMessage(true);
    setTimeout(() => setShowClipboardMessage(false), 2000);
  }

  return (
    <footer className="w-full flex justify-center items-end bg-[#111827]">
      <div className="flex items-center gap-6 m-2">
        <span
          className="relative group text-white/90 md:text-xl pl-2 hover:text-white group-hover:stroke-white hover:cursor-pointer flex items-center gap-3"
          onClick={() => copyToClipboard("gdrosin@gmail.com")}
          title="Copy"
        >
          gdrosin@gmail.com
          <Copy className="w-5 h-5 stroke-white/60 group-hover:stroke-white" />
          {showClipboardMessage && (
            <div className="absolute -mt-20 -ml-1 p-2 flex rounded-lg items-center justify-center border border-gray-600 mb-1 z-10 bg-[#111827]">
              <span className="w-40 text-white/60 text-sm md:text-md">
                Copied to clipboard! ❤️
              </span>
            </div>
          )}
        </span>
        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/georgios-drosinos/">
            <Image
              alt="LinkedIn"
              src="/logos/linkedin.svg"
              width={64}
              height={64}
              title="LinkedIn"
            />
          </a>
          <a href="https://discord.com/users/flektor#6330">
            <Image
              alt="Discord"
              src="/logos/discord.svg"
              width={42}
              height={42}
              title="Discord"
            />
          </a>
          <a href="https://github.com/flektor">
            <Image
              alt="Github"
              src="/logos/github.svg"
              width={64}
              height={64}
              title="Github"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
