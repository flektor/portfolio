import React from "react";
import { ProjectMockupProps } from "../Projects/projects";
import useVideo from "../../utils/useVideo";

export function TabletMockup(
  props: ProjectMockupProps & { className?: string },
) {
  const video = useVideo(props.video[0]);
  return (
    <div className={`${props.className}`}>
      <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] max-w-[350px] md:h-[682px] md:max-w-[512px]">
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[42px] rounded-r-lg" />
        <div
          className={`flex justify-center items-center rounded-[2rem] overflow-hidden md:h-[654px] bg-gray-900`}
        >
          {video || <img src={props.images[0]} alt="" />}
        </div>
      </div>
    </div>
  );
}
