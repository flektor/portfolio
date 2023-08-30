import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function IntroTechLogos() {
  const [isJavaScript, setIsJavaScript] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsJavaScript((prevState) => !prevState);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const lang = `${isJavaScript ? "Java" : "Type"}Script`;

  return (
    <div className="flex">
      <Image
        alt="React"
        src="/logos/react.svg"
        width={128}
        height={128}
        className="animate-spin-slow"
      />

      <Image
        alt={lang}
        src={`/logos/${lang.toLowerCase()}.svg`}
        width={128}
        height={128}
        className="animate-bounce"
      />

      <Image
        alt="HTML"
        src="/logos/html.svg"
        width={128}
        height={128}
        className="animate-beat"
      />

      <Image
        alt="CSS"
        src="/logos/css.svg"
        width={82}
        height={82}
        className="animate-flip ml-5 mr-5"
      />
    </div>
  );
}
