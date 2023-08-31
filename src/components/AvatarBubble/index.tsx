import React, { useEffect, useRef } from "react";
import KUTE from "kute.js";

export default function AvatarBubble() {
  const bubbleBlobRef = useRef(null);

  useEffect(() => {
    const tween = KUTE.fromTo(
      bubbleBlobRef.current,
      { path: "#avatar-blob1" },
      { path: "#avatar-blob2" },
      {
        repeat: 999,
        duration: 5000,
        yoyo: true,
        easing: "easingQuadraticInOut",
      },
    );

    tween.start();

    return () => {
      if (tween.cancel) {
        tween.cancel();
      }
    };
  }, []);

  return (
    <svg
      id="visual"
      viewBox="0 0 200 200"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] fill-[#CC707F]"
    >
      <defs>
        <clipPath id="bubble">
          <path
            ref={bubbleBlobRef}
            id="avatar-blob1"
            d="m 168.06707,22.711021 c 15.92844,16.934676 18.89385,44.222789 19.4022,71.912197 0.50836,27.689412 -1.52506,55.860372 -17.36878,75.925162 -15.92845,20.06479 -45.66721,32.02341 -72.016933,28.81304 C 71.733832,196.15105 48.773136,177.7717 32.844684,157.70692 16.831506,137.64213 7.9352943,115.8919 6.4102299,92.696999 4.8851636,69.582362 10.9007,44.942802 26.829151,28.00812 42.757604,10.993181 68.768426,1.6028582 96.050139,0.23845469 123.41657,-1.0456893 152.22335,5.6960773 168.06707,22.711021"
          />
        </clipPath>

        <g style={{ visibility: "hidden" }}>
          <path
            id="avatar-blob2"
            d="m 174.67222,23.254075 c 18.06843,17.869123 26.62295,48.565093 24.94402,77.314935 -1.67892,28.74982 -13.67124,55.64197 -31.73966,72.18418 -18.14837,16.45374 -42.4528,22.64601 -65.2382,20.87679 C 79.932925,191.94922 58.746495,182.39543 38.759305,165.85322 18.772105,149.31101 -0.01585441,125.86885 -0.17575441,102.24976 -0.33564441,78.630666 18.212465,54.923116 38.199665,37.053991 58.186855,19.18487 79.613125,7.3310949 104.23735,3.8811159 c 24.54428,-3.44998033 52.2865,1.592298 70.43487,19.3729591"
          />
        </g>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="#CC707F"
        clipPath="url(#bubble)"
      />

      <image
        width={200}
        height={200}
        xlinkHref="/me.png"
        clipPath="url(#bubble)"
      />
    </svg>
  );
}
