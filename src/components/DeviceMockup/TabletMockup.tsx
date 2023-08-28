import React from "react";

import { ProjectProps } from "../../utils/projectProps";

export function TabletMockup(
  props: ProjectProps & { className?: string },
) {
  return (
    <div className={props.className}>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
        <div
          className={`flex justify-center items-center rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-gray-900`}
        >
          <img
            src={props.images[0]}
            // className="dark:hidden  "
            alt=""
          />
          {
            /* <img
            src={darkImageSrc}
            className="hidden dark:block  "
            alt=""
            /> */
          }
        </div>
      </div>
    </div>
  );
}