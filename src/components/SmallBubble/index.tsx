import React, { useEffect, useRef } from "react";
import KUTE from "kute.js";

type BubbleProps = {
  className?: string;
  image: string;
  alt: string;
  bubble1: Bubble;
  bubble2: Bubble;
};

type Bubble = {
  id: string;
  path: string;
};

export default function SmallBubble(
  { bubble1, bubble2, className, image, alt }: BubbleProps,
) {
  const bubbleBlobRef = useRef(null);
  const clipId = bubble1.id.replace("sm-bubble", "clip");

  useEffect(() => {
    const duration = Math.random() * 2000 + 2000;

    const tween = KUTE.fromTo(
      bubbleBlobRef.current,
      { path: `#${bubble1.id}` },
      { path: `#${bubble2.id}` },
      { repeat: 999, duration: duration, yoyo: true },
    );
    tween.start();

    return () => {
      if (tween) {
        // tween.cancel();
      }
    };
  }, []);

  return (
    <svg
      viewBox="0 0 64 64"
      width="64"
      height="64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <defs>
        <clipPath id={clipId}>
          <path
            ref={bubbleBlobRef}
            id={bubble1.id}
            d={bubble1.path}
            className={className}
          />
        </clipPath>
        <g style={{ visibility: "hidden" }}>
          <path
            id={bubble2.id}
            d={bubble2.path}
          />
        </g>
      </defs>
      {/* <rect width="100%" height="100%" fill="red" /> */}

      <image
        aria-label={alt}
        width={64}
        height={64}
        xlinkHref={image}
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
}
