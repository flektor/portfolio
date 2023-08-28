import React from "react";
import Image from "next/image";
import { getIcons } from "../../utils/techIcons";

export default function Stack({ technologies }: { technologies: string[] }) {
  return (
    <ul className="flex flex-wrap justify-around -ml-5 -mr-5 md:m-0 md:justify-end">
      {getIcons(technologies)
        .map((image) => (
          <li className="relative group -ml-2 -mr-2" key={image.alt}>
            <div
              className="group-hover:animate-bounce group-hover:scale-50 transition duration-150 ease-out  group-hover:ease-in"
              key={image.alt}
            >
              <Image
                // className="-p-2 "
                alt={image.alt}
                src={image.src}
                width={64}
                height={64}
              />
            </div>
            <div className="absolute inset-0 pt-28 flex items-center justify-center opacity-0 group-hover:opacity-100 mb-5 z-10 group-hover:transition">
              <div className="text-white/60 text-xl -mt-20">{image.alt}</div>
            </div>
          </li>
        ))}
    </ul>
  );
}
