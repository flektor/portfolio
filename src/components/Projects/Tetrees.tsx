import React from "react";
import Stack from "../Stack";
import EyeLink from "../Links/EyeLink";
import CodeLink from "../Links/CodeLink";
import { LaptopMockup } from "../DeviceMockup/LaptopMockup";
import { getProjectDetails } from "./projects";

export default function Tetrees() {
  const data = getProjectDetails("Tetrees");
  if (!data || data.title !== "Tetrees") {
    return null;
  }
  return (
    <div className="md:flex flex-col gap-1">
      <div className="w-full md:flex justify-between items-center gap-10">
        <div>
          <div className="md:-mt-6">
            <div className="mt-5 mb-5 w-full flex justify-start items-center">
              <span className="flex flex-col text-4xl md:text-5xl mr-2">
                <span className="whitespace-nowrap">
                  {data.title}
                </span>

                <span className="text-xl text-white/60 whitespace-nowrap flex flex-col">
                  {data.tag} <span>{data.location}</span>
                </span>
                <span className="text-xl text-white/60 whitespace-nowrap flex ">
                  {data.date}
                </span>
              </span>
              <div className="md:hidden mb-20 w-full -ml-6 md:ml-0 flex justify-end gap-2">
                <EyeLink url={data.liveUrl} />
                <CodeLink url={data.repoUrl} />
              </div>
            </div>
            <div className="flex justify-end md:justify-start -mt-24 md:m-0">
              <Stack technologies={data.stack} />
            </div>
          </div>

          <div className="hidden md:flex mt-5 mb-5 w-full justify-start gap-2">
            <EyeLink url={data.liveUrl} />
            <CodeLink url={data.repoUrl} />
          </div>
        </div>
        <div className="mt-10  md:mt-0 md:mr-20">
          <LaptopMockup
            {...data.mockup}
            className="transition hover:-translate-y-1 z-20"
          />
        </div>
      </div>
      <span className="text-xl block mt-6">
        {data.description}
      </span>
    </div>
  );
}
