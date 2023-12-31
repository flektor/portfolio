import React from "react";
import Eye from "../Icons/Eye";

export default function EyeLink({ url }: { url: string }) {
  return (
    <a // className="text-xl underline flex gap-2 align-center"
      className="rounded flex gap-1 items-center border w-fit p-1 pl-2 pr-2 text-lg border-white/30"
      target="_blank"
      href={url}
      data-te-animation-init
      data-te-animation-target="#animate-hover"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <span className="hidden md:inline">
        View
      </span>
      <Eye
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
