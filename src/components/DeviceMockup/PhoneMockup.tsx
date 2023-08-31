import React from "react";
import { ProjectMockupProps } from "../Projects/projects";

export function PhoneMockup(
  props: ProjectMockupProps & { className?: string },
) {
  return (
    <div
      className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${props.className}`}
    >
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" />
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
      <div
        className={`rounded-[2rem] flex justify-center items-center overflow-hidden w-[272px] h-[572px] bg-[${props.backgroundColor}]`}
      >
        {props.video
          ? <video autoPlay loop muted src={props.video[0]} />
          : <img src={props.images[0]} alt="" />}
      </div>
    </div>
  );
}
