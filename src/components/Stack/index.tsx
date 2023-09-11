import React from "react";
import Image from "next/image";
import { getIcons } from "../../utils/techIcons";
import { ProjectDetails } from "../Projects/projects";
type StackProps = {
  technologies: Pick<ProjectDetails, "stack">["stack"];
};
export default function Stack({ technologies }: StackProps) {
  return (
    <ul className="flex justify-start gap-2 md:gap-0">
      {getIcons(technologies)
        .map((image) => (
          <li className="relative group -ml-2 -mr-2 md:m-0" key={image.alt}>
            <div
              key={image.alt}
              className="group-hover:animate-bounce group-hover:scale-50 transition duration-150 ease-out group-hover:ease-in"
            >
              <Image
                alt={image.alt}
                src={image.src}
                width={64}
                height={64}
              />
            </div>
            <div className="absolute inset-0 mt-28 flex items-center justify-center opacity-0 group-hover:opacity-100 mb-5 z-10 group-hover:transition">
              <div className="text-white/60 text-xl -mt-24">{image.alt}</div>
            </div>
          </li>
        ))}
    </ul>
  );
}
