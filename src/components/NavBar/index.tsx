import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Nav() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) {
      return;
    }

    const timer = setTimeout(() => {
      setClicked(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [clicked]);

  return (
    <nav className="fixed z-30 top-0 left w-full pt-2.5 pb-2.5 flex items-center justify-around bg-[#111827] text-white ">
      <ul className="max-w-4xl w-full flex items-center justify-around gap-10">
        <li key="intro">
          <a href="#intro" onClick={() => setClicked(true)}>
            <span className="relative flex h-8 w-8">
              {clicked &&
                (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC707F] opacity-75" />
                )}

              <span className="relative inline-flex rounded-full h-8 w-8  bg-[#CC707F]">
              </span>
            </span>
          </a>
        </li>
        <li key="contact">
          <a href="#contact">Contact</a>
        </li>
        <li key="about">
          <a href="#about">About</a>
        </li>
        <li key="education">
          <a href="#education">Education</a>
        </li>
        <li key="projects">
          <a href="#projects">Projects</a>
        </li>
        <li key="katas">
          <a href="#katas">Katas</a>
        </li>

        <div className="flex">
          <a href="https://www.linkedin.com/in/georgios-drosinos/">
            <Image
              alt="LinkedIn"
              src="/logos/linkedin.svg"
              width={48}
              height={48}
            />
          </a>
          <a href="https://github.com/flektor">
            <Image
              alt="Github"
              src="/logos/github.svg"
              width={48}
              height={48}
            />
          </a>
        </div>
      </ul>
    </nav>
  );
}
