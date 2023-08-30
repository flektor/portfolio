import React from "react";
import Code from "../../components/Icons/Code";

export default function CodeLink(
  { url, text = "Code" }: { url: string; text?: string },
) {
  return (
    <a
      className="rounded flex gap-2 items-center border w-fit p-1 pl-5 pr-5 round text-lg"
      target="_blank"
      href={url}
      data-te-animation-init
      data-te-animation-target="#animate-hover"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      {text}
      <Code
        className="w-[32px] h-[32px] stroke-white"
        id="animate-hover"
        data-te-animation-init
        data-te-animation-start="onHover"
        data-te-animation-reset="true"
        data-te-animation="[slide-right_1s_ease-in-out]"
      />
    </a>
  );
}
