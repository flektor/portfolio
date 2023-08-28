import React from "react";
import Eye from "../../components/Icons/Eye";

export default function EyeLink({ url }: { url: string }) {
  return (
    <a // className="text-xl underline flex gap-2 align-center"
      className="rounded flex gap-2 items-center border w-fit p-1 pl-5 pr-5 round text-lg"
      target="_blank"
      href={url}
      data-te-animation-init
      data-te-animation-target="#animate-hover"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      View
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
