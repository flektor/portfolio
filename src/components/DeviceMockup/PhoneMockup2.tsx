import React from "react";
import { ProjectMockupProps } from "../Projects/projects";
import useVideo from "../../utils/useVideo";
export function PhoneMockup(
  props: ProjectMockupProps & { className?: string },
) {
  const video = useVideo(props.video[0]);
  return (
    <div
      className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[300px] shadow-xl ${props.className}`}
    >
      <div className="w-full h-[32px] bg-gray-800 -top-1 left-1/2 -translate-x-1/2 absolute" />
      <div className="w-full h-[32px] bg-gray-800 -bottom-1 left-1/2 -translate-x-1/2 absolute" />
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
      <div
        className={`flex justify-center items-center overflow-hidden mt-10 bg-[${props.backgroundColor}]`}
      >
        {video || <img src={props.images[0]} alt="" />}
      </div>
    </div>
  );
}
