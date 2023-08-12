import React from "react";
import images from "./images-data.json";
import Image from "next/image";

export default function Stack({ technologies }: { technologies: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 w-2/3 float-right justify-end mr-10 -mt-10">
      {images.filter((tech) => technologies.includes(tech.alt))
        .map((image) => (
          <li
            className="relative group"
            key={image.alt}
          >
            <Image
              className="-p-2"
              alt={image.alt}
              src={image.src}
              width={64}
              height={64}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 mb-5 z-10">
              <div className="text-white/60 text-xl -mt-20 ">{image.alt}</div>
            </div>
          </li>
        ))}
    </ul>
  );
}
