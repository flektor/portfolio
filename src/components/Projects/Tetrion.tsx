import React from "react";
import Stack from "../Stack";
import EyeLink from "../Links/EyeLink";
import CodeLink from "../Links/CodeLink";
import { TabletMockup } from "../DeviceMockup/TabletMockup";
import { getProjectDetails } from "./projects";

export default function Tetrion() {
  const data = getProjectDetails("Tetrion");
  if (!data) {
    return null;
  }
  return (
    <div className="md:flex flex-col gap-1">
      <div className="w-full md:flex items-center gap-10">
        <TabletMockup
          {...data.mockup}
          className="transition hover:-skew-y-1 hover:skew-x-1 hover:-translate-y-1 rotate-90 z-20 scale-[70%]"
        />
        <div>
          <div className="-mt-24 md:-mt-6">
            <div className="mt-5 mb-5 w-full flex justify-start items-center">
              <span className="flex flex-col text-5xl mr-2">
                {data.title}
                <span className="text-xl text-white/60 whitespace-nowrap">
                  {data.date}
                </span>
              </span>
              <div className="md:hidden mb-5 w-full flex justify-end gap-2">
                <EyeLink url={data.liveUrl} />
                <CodeLink url={data.repoUrl} />
              </div>
            </div>
          </div>
          <Stack technologies={data.stack} />
          <div className="hidden md:flex mt-5 mb-5 w-full justify-start gap-2">
            <EyeLink url={data.liveUrl} />
            <CodeLink url={data.repoUrl} />
          </div>
        </div>
      </div>
      <span className="text-xl block md:-mt-36">
        {data.description}
      </span>
    </div>
  );
}
