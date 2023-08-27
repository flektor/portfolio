import React from "react";

import getRankColor from "~/utils/codewars-color-to-hex";

export default function CodewarsBadge(
  { color, rank }: { color: string; rank: string },
) {
  const rankColor = getRankColor(color);
  if (!rankColor) {
    return rank;
  }

  return (
    <svg
      width="64.663002"
      height="28"
      viewBox="0 0 64.663002 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#141414"
        d="M 55.237,25.45 61.61,14 55.237,2.55 H 9.41 L 3.037,14 9.41,25.45 Z"
      />
      <text
        fill={rankColor.text}
        fontFamily="Lato, HelveticaNeue, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="14px"
        x="32"
        y="18.77"
        textAnchor="middle"
      >
        {rank}
      </text>
      <path
        fill={rankColor.outline || rankColor.text}
        d="M 8.083,28 0,14 8.083,0 H 56.58 L 64.663,14 56.58,28 Z M 54.697,24.767 60.919,14 54.697,3.233 H 9.95 L 3.728,14 9.95,24.767 Z"
      />
    </svg>
  );
}
