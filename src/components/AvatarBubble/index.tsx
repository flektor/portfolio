import React, { useEffect, useRef } from "react";
import KUTE from "kute.js";

export default function AvatarBubble() {
  const bubbleBlobRef = useRef(null);

  useEffect(() => {
    const tween = KUTE.fromTo(
      bubbleBlobRef.current,
      { path: "#avatar-blob1" },
      { path: "#avatar-blob2" },
      { repeat: 999, duration: 6000, yoyo: true },
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
      viewBox="0 0 398.70001 395.29999"
      width="398.70001"
      height="395.29999"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="bubble">
          <path
            ref={bubbleBlobRef}
            id="avatar-blob1"
            d="M 181.3,1.2 C 181.3,100 90.7,200 1.6,200 -87.5,200 -175,100 -175,1.2 c 0,-98.9 87.5,-196.5 176.6,-196.5 89.1,0 179.7,97.6 179.7,196.5"
          />
        </clipPath>

        <g style={{ visibility: "hidden" }}>
          <path
            id="avatar-blob2"
            d="m 398.7,187.31387 c 0,88.8 -100,178.8 -199.7,178.8 -99.6,0 -199,-90 -199,-178.8 0,-88.7 99.4,-176.2 199,-176.2 99.7,0 199.7,87.5 199.7,176.2"
          />
        </g>
      </defs>

      <image
        width={400}
        height={400}
        xlinkHref="/me.jpg"
        clipPath="url(#bubble)"
      />
    </svg>
  );
}
