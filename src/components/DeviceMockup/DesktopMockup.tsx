import React from "react";

import { ProjectMockupProps } from "../Projects/projects";
import useVideo from "~/utils/useVideo";

export function DesktopMockup(
  props: ProjectMockupProps & { className?: string },
) {
  const video = useVideo({ src: props.video[0] });
  return (
    <div className={props.className}>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div
          className={`flex justify-center items-center rounded-xl overflow-hidden h-[140px] md:h-[262px] bg-[${props.backgroundColor}]`}
        >
          {video || <img src={props.images[0]} alt="" />}
        </div>
      </div>
      <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]">
      </div>
      <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]">
      </div>
    </div>
  );
}
