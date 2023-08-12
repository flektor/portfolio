import React from "react";

export default function Education() {
  return (
    <>
      <div className="relative w-full flex items-center ">
        <div className="relative justify-center">
          <span className="text-4xl pb-1">
            Bachelor
          </span>
          <span className="text-3xl p-1 ml-2">
            in Informatics Engineering
          </span>
          <span className="text-xl block">
            Hellenic Mediterranean University
          </span>
          <span className="text-xl text-white/60 pb-6 block">
            May 2021, Heraklion
          </span>
        </div>
      </div>

      <div className="relative w-full flex items-center ">
        <div className="relative justify-center">
          <span className="text-3xl pb-1">
            Certificate in Full-Stack Web Development
          </span>
          <span className="text-xl block">
            SPICED Academy
          </span>
          <span className="text-xl text-white/60 pb-6 block">
            Jul 2023, Berlin
          </span>
        </div>
      </div>
    </>
  );
}
