import React from "react";
import Project from "../Project";
import projectsData from "./projects.json";

export default function Projects() {
  return (
    <ul>
      {projectsData.map((props, i) => (
        <li key={i} className="mt-10 mb-10">
          <Project {...props} />
        </li>
      ))}
    </ul>
  );
}
