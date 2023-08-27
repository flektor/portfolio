import React from "react";
import Stack from "../stack";

export type ProjectProps = {
  title: string;
  description: string;
  date: string;
  liveUrl: string;
  repoUrl: string;
  stack: string[];
  tag?: string;
  location?: string;
};

export default function Project(props: ProjectProps) {
  return (
    <div className="relative w-full flex items-center ">
      <div className="relative justify-center">
        <span className="flex justify-between items-center text-4xl pb-1">
          {props.title}
          {props.tag && (
            <span className="text-lg text-white/60 flex flex-col">
              {props.tag}
              {props.location && <span>{props.location}</span>}
            </span>
          )}
        </span>

        <span className="text-2xl p-1 block">
          {props.description}
        </span>
        <span className="text-xl text-white/60 pb-6 block">
          {props.date}
        </span>

        <div className="flex ">
          <div className="flex flex-col justify-between items-bottom ">
            <a
              className="text-xl underline"
              target="_blank"
              href={props.liveUrl}
            >
              View
            </a>
            <a
              className="text-xl underline"
              target="_blank"
              href={props.repoUrl}
            >
              Code
            </a>
          </div>
          <Stack
            technologies={props.stack}
          />
        </div>
      </div>
    </div>
  );
}
