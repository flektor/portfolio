import React from "react";

export default function Education() {
  return (
    <>
      <div className="relative w-full flex">
        <span className="text-3xl -ml-4 md:-ml-11 mr-1 mt-1 ">
          🎓
        </span>
        <div className="relative justify-center">
          <span className="text-3xl md:text-4xl pb-1">
            Bachelor
          </span>
          <span className="md:whitespace-nowrap text-2xl md:text-3xl p-1 ml-2">
            in <span className="block md:inline">Informatics Engineering</span>
          </span>
          <span className="-mt-6 md:m-0 md:text-xl block">
            Hellenic Mediterranean University
          </span>
          <span className="md:text-xl text-white/60 pb-6 block  ">
            May 2021, Heraklion
          </span>
        </div>
      </div>

      <div className="relative w-full flex">
        <span className="text-2xl -ml-4 md:-ml-10 mr-2 mt-1 ">
          🌶️
        </span>
        <div className="relative justify-center">
          <span className="text-2xl md:text-3xl pb-1">
            Certificate in <span className="whitespace-nowrap">Full-Stack</span>
            {" "}
            <span className="whitespace-nowrap">Web Development</span>
          </span>
          <span className="md:text-xl block">
            SPICED Academy
          </span>
          <span className="md:text-xl text-white/60 pb-6 block  ">
            Jul 2023, Berlin
          </span>
        </div>
      </div>
    </>
  );
}
