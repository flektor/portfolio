import React from "react";
import Stack from "../Stack";
import EyeLink from "../Links/EyeLink";
import CodeLink from "../Links/CodeLink";
import { PhoneMockup } from "../DeviceMockup/PhoneMockup";
import { getProjectDetails } from "./projects";

export default function Meet() {
  const data = getProjectDetails("Meet");
  if (!data) {
    return null;
  }
  return (
    <div className="mt-10 mb-10  flex flex-col-reverse md:flex-row gap-10">
      <div className="w-full flex items-center -mt-24">
        <div>
          <div className="pb-md:flex justify-between">
            <div className="mt-5 mb-5 w-full flex justify-around items-center">
              <span className="flex flex-col text-5xl ">
                {data.title}

                <span className="text-xl text-white/60 whitespace-nowrap">
                  {data.date}
                </span>
              </span>
              <div className="mt-5 mb-5 w-full flex justify-end items-bottom gap-2">
                <EyeLink url={data.liveUrl} />
                <CodeLink url={data.repoUrl} />
              </div>
            </div>
            <Stack
              technologies={data.stack}
            />
          </div>

          <span className="text-xl pt-5 p-1 block">
            {data.description}
          </span>
        </div>
      </div>
      <PhoneMockup
        {...data.mockup}
        className="mb-20 transition hover:skew-y-1 hover:-skew-x-1 hover:-translate-y-1"
      />
    </div>
  );
}
