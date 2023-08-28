import React from "react";
import { getProjectDetails } from "./projects";
import {
  DesktopMockup,
  LaptopMockup,
  PhoneMockup,
  TabletMockup,
} from "../DeviceMockup";

import { getProjectProps } from "~/utils/projectProps";
import Project from "../Project";

export default function Projects() {
  const meetPhoneProps = getProjectProps("MeetPhone");
  return (
    <ul>
      {
        /* {projectsData.map((props, i) => (
        <li key={i} className="mt-10 mb-10">
          <Project {...props} />
        </li>
      ))} */
      }

      <li key="Meet" className="mt-10 mb-10 md:flex gap-10">
        <PhoneMockup {...meetPhoneProps} className="mb-20" />
        {/* <TabletMockup {...getProjectProps("MeetTablet")} /> */}
        <Project {...getProjectDetails("Meet") as any} />
      </li>

      <li key="Tetrion" className="mt-48">
        <LaptopMockup {...getProjectProps("Tetrion")} className="mb-20" />
        <Project {...getProjectDetails("Tetrion") as any} />
      </li>

      <li key="Gallery" className="mt-48 mb-10 md:flex gap-10">
        <Project {...getProjectDetails("Gallery") as any} />
        <PhoneMockup {...getProjectProps("Gallery")} className="mb-20" />
      </li>

      <li key="Candle" className="mt-48">
        <LaptopMockup {...getProjectProps("Candle")} className="mb-20" />
        <Project {...getProjectDetails("Candle") as any} />
      </li>

      <li key="Tetrees" className="mt-48">
        <DesktopMockup {...getProjectProps("Tetrees")} className="mb-20" />
        <Project {...getProjectDetails("Tetrees") as any} />
      </li>

      <li key="JChess" className="mt-48">
        {/* <Project {...getProjectDetails("JChess") as any} /> */}
        <DesktopMockup {...getProjectProps("JChess")} className="mb-20" />
      </li>

      <li key="2048" className="mt-48 mb-48">
        {/* <Project {...getProjectDetails("2048") as any} /> */}
        <TabletMockup {...getProjectProps("2048")} className="mb-20" />
      </li>
    </ul>
  );
}
