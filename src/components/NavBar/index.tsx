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
      <ul className="max-w-4xl w-full flex items-center pl-3 pr-3 md:p-0 justify-around gap-3 md:gap-10">
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
        <li key="about" className="hover:underline">
          <a href="#about">About</a>
        </li>
        <li key="education" className="hover:underline">
          <a href="#education">Education</a>
        </li>
        <li key="projects" className="hover:underline">
          <a href="#projects">Projects</a>
        </li>
        <li key="katas" className="hidden md:inline hover:underline">
          <a href="#katas">Katas</a>
        </li>

        <li key="contact" className="hover:underline">
          <a href="#contact">Contact</a>
        </li>

        <div className="flex">
          <a
            href="https://www.linkedin.com/in/georgios-drosinos/"
            className="hover:animate-scale"
          >
            <Image
              alt="LinkedIn"
              src="/logos/linkedin.svg"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://github.com/flektor"
            className="hidden md:inline hover:animate-scale"
          >
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
