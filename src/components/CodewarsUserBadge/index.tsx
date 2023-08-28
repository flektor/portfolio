import React from "react";

import getRankColor from "~/utils/codewarsColorToHex";

export default function CodewarsBadge({ username, honor, color, rank }: {
  username: string;
  honor: number;
  color: string;
  rank: string;
}) {
  const item = getRankColor(color);
  const textColor = item?.text || "#E6E6E6";
  const outlineColor = item?.outline || item?.text || "#E6E6E6";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="275"
      height="40"
      viewBox="0 0 275 40"
    >
      <path
        fill="#303133"
        d="M 11.547,40 0,20 11.547,0 h 172.467 v 40 z"
      />
      <text
        fill="#e8e8e8"
        fontFamily="Lato, HelveticaNeue, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="20px"
        x="77"
        y="27"
      >
        flektor
      </text>
      <path
        fill="#1d1d1f"
        d="m 169.36514,40.116877 -11.547,-20 11.547,-19.99999985 h 93.906 l 11.547,19.99999985 -11.547,20 z"
      />
      <text
        fill="#aaaaaa"
        fontFamily="Lato, HelveticaNeue, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="14px"
        textAnchor="middle"
        x="196.81815"
        y="25.116877"
      >
        {honor}
      </text>
      <path
        fill="#b92f21"
        d="m 259.31514,5.1168772 h -24.994 a 2.51,2.51 0 0 0 -2.503,2.503 V 32.613877 a 2.51,2.51 0 0 0 2.503,2.503 h 24.994 a 2.51,2.51 0 0 0 2.503,-2.503 V 7.6198772 a 2.51,2.51 0 0 0 -2.503,-2.503 z m 0.568,17.8279998 c -0.123,0.122 -0.24,0.25 -0.408,0.423 0.24,1.448 -0.707,2.307 -1.747,3.11 a 255.023,255.023 0 0 1 -3.263,2.49 c -0.245,0.184 -0.544,0.293 -0.82,0.438 -0.683,1.886 -0.941,2.118 -2.388,2.085 -0.346,0.93 -1.034,1.301 -2.034,1.039 -0.067,-0.018 -0.17,-0.076 -0.192,-0.054 -0.973,1 -2.089,0.23 -3.102,0.164 -0.75,-0.049 -1.508,-0.53 -2.183,-0.947 -0.57,-0.352 -0.974,-1 -1.784,-0.813 a 0.14,0.14 0 0 1 -0.1,-0.02 c -0.782,-0.565 -1.726,-0.218 -2.519,-0.43 -1.028,-0.276 -1.942,-0.995 -2.883,-1.56 -0.141,-0.084 -0.17,-0.365 -0.24,-0.558 -0.049,-0.13 -0.05,-0.358 -0.125,-0.384 -1.028,-0.35 -0.99,-1.328 -1.33,-2.11 -0.316,-0.727 -0.535,-1.378 -0.134,-2.133 0.094,-0.178 0.09,-0.477 0.01,-0.67 -0.518,-1.238 -0.53,-1.234 -0.402,-2.465 -1.063,-0.906 -1.22,-1.594 -0.356,-2.686 -0.346,-0.784 -0.52,-1.576 0.425,-2.142 0.07,-0.043 0.094,-0.18 0.12,-0.279 0.308,-1.21 1.222,-1.971 2.182,-2.566 0.88,-0.546 1.95,-0.682 2.53,-1.783 0.217,-0.411 0.89,-0.652 1.024,-1.2789998 0.032,-0.148 0.197,-0.293 0.336,-0.387 0.693,-0.463 1.502,-0.702 2.135,-1.328 0.266,-0.262 1.008,-0.043 1.712,-0.043 0.936,-1.169 2.221,-0.219 3.408,-0.067 0.561,0.071 1.063,0.571 1.605,0.852 0.238,0.124 0.503,0.204 0.765,0.27 0.165,0.04 0.368,-0.036 0.516,0.028 0.832,0.361 1.66,0.596 2.566,0.247 0.124,-0.048 0.403,0.047 0.474,0.16 0.582,0.9299998 1.76,0.6299998 2.473,1.2339998 0.205,0.174 0.238,0.55 0.377,0.904 0.681,0.223 1.425,0.491 1.245,1.511 0.73,0.45 0.252,1.4 0.797,1.927 -0.575,1.257 0.765,2.304 0.389,3.623 0.178,0.123 0.447,0.236 0.605,0.437 0.227,0.288 0.61,0.788 0.515,0.94 -0.583,0.932 0.68,1.957 -0.199,2.822 z m -13.358,-11.386 c -1.385,0.513 -1.401,0.537 -1.092,1.779 -0.673,0.3 -1.08,0.787 -0.725,1.605 a 0.443,0.443 0 0 1 -0.054,0.383 c -0.319,0.374 -0.258,0.72 -0.093,1.152 0.09,0.238 -0.088,0.58 -0.144,0.87 0.295,0.407 0.616,0.795 0.869,1.224 0.095,0.16 0.119,0.523 0.021,0.6 -0.15,0.12 -0.47,0.159 -0.651,0.08 -0.725,-0.316 -1.487,-0.605 -2.114,-1.068 -0.49,-0.363 -0.834,-0.946 -1.183,-1.47 -0.255,-0.384 -0.413,-0.831 -0.709,-1.446 0.066,-0.13 0.238,-0.453 0.392,-0.784 0.108,-0.234 0.33,-0.529 0.262,-0.708 -0.196,-0.527 0.18,-0.932 0.188,-1.361 0.022,-1.112 1.25,-1.337 1.473,-2.249 1.188,-0.5229998 2.287,-1.3849998 3.724,-0.9589998 0.223,0.067 0.466,0.062 0.67,0.087 0.259,0.524 -0.02,0.8129998 -0.282,1.1579998 -0.24,0.315 -0.365,0.718 -0.552,1.107 z m 8.605,0.969 1.386,1.227 0.368,1.626 -0.211,0.166 c -0.923,-0.602 -2.094,0.066 -2.986,-0.716 -0.068,-0.06 -0.203,-0.078 -0.3,-0.063 -0.893,0.136 -1.83,0.155 -2.667,0.455 -1.576,0.566 -3.02,1.401 -4.025,3.022 -0.69,-0.731 -0.682,-1.482 -0.525,-2.225 0.153,-0.718 0.408,-1.414 0.636,-2.18 0.872,0.01 0.833,-0.808 1.071,-1.292 1.94,-0.746 3.806,-1.559 6.001,-0.786 0.208,0.483 0.611,0.982 1.252,0.766 z m -8.393,8.495 c 0.775,1.676 0.215,3.145 -0.484,4.53 -0.298,0.392 -0.599,0.784 -0.894,1.18 -0.083,0.11 -0.152,0.33 -0.227,0.33 -1.043,-0.002 -1.667,1.036 -2.766,1.025 -0.881,-0.009 -1.72,0.159 -2.623,-0.148 -1.054,-0.36 -1.897,-0.905 -2.683,-1.683 -0.644,-0.635 -0.813,-1.256 -0.581,-2.083 h 2.114 c 0.506,0.618 1.223,0.956 2.148,0.405 0.152,-0.09 0.395,-0.02 0.593,-0.045 0.402,-0.05 0.806,-0.09 1.2,-0.18 0.387,-0.089 0.763,-0.233 1.144,-0.351 0.131,-0.041 0.302,-0.039 0.39,-0.123 a 49.786,49.786 0 0 0 1.625,-1.634 c 0.331,-0.35 0.629,-0.734 1.044,-1.223 z m -8.55,-7.412 c -0.099,0.867 0.008,1.546 0.824,1.968 -0.32,0.9 -0.38,1.692 0.727,2.013 0.062,0.018 0.157,0.07 0.161,0.113 0.082,0.988 0.949,1.092 1.583,1.528 1.013,0.699 2.025,1.145 3.268,0.997 0.203,-0.024 0.422,0.079 0.653,0.127 -0.126,0.997 -0.883,1.466 -1.499,1.685 -1.169,0.417 -2.355,1.182 -3.725,0.514 -0.262,-0.127 -0.667,0.039 -0.898,0.06 -1.429,-0.664 -2.115,-2.04 -3.314,-2.925 0.057,-0.62 0.518,-1.347 -0.268,-1.765 0.193,-1.892 0.87,-3.372 2.488,-4.315 z m 17.403,12.717 c -0.134,-0.358 -0.343,-0.631 -0.3,-0.856 0.132,-0.688 -0.138,-1.144 -0.732,-1.52 0.273,-0.84 -0.014,-1.456 -0.766,-1.903 -0.17,-0.101 -0.314,-0.365 -0.337,-0.57 -0.068,-0.581 -0.374,-0.862 -0.934,-0.932 -0.166,-0.02 -0.396,-0.048 -0.476,-0.16 -0.808,-1.117 -2.061,-1.097 -3.228,-1.3 -0.281,-0.048 -0.564,-0.087 -0.875,-0.134 0.086,-1.003 0.891,-1.294 1.415,-1.487 1.198,-0.44 2.504,-1.041 3.787,-0.495 1.02,0.436 2.277,0.51 2.952,1.654 0.207,0.351 0.683,0.544 1.035,0.808 l 0.643,1.978 v 2.056 c -0.548,0.829 -0.966,1.976 -2.184,2.86 z m -11.883,3.506 c 1.956,0.027 2.165,-0.1 2.604,-1.54 0.833,-0.277 1.549,-0.712 1.559,-1.778 0.001,-0.13 0.202,-0.259 0.31,-0.388 0.132,-0.157 0.358,-0.302 0.379,-0.473 0.153,-1.27 0.427,-2.548 -0.018,-3.816 -0.176,-0.502 -0.374,-0.998 -0.637,-1.697 0.512,0.051 0.852,0.02 1.142,0.126 1.23,0.452 2.217,1.278 2.987,2.302 0.363,0.482 0.459,1.164 0.734,1.915 -0.303,0.446 -0.444,1.092 0.117,1.747 -0.739,0.6 -1.123,1.303 -1.004,2.12 l -1.8,1.728 -1.567,0.697 c -0.495,0.094 -0.979,0.23 -1.47,0.264 -0.473,0.034 -1.046,0.12 -1.409,-0.097 -0.603,-0.359 -1.57,-0.088 -1.927,-1.11 z"
      />
      <path
        fill="#141414"
        d="M 62.237,31.45 68.61,20 62.237,8.55 H 16.41 L 10.037,20 16.41,31.45 Z"
      />
      <text
        fill={textColor}
        fontFamily="Lato, HelveticaNeue, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="14px"
        x="39"
        y="24.77"
        textAnchor="middle"
      >
        {rank}
      </text>
      <path
        fill={outlineColor}
        d="M 15.083,34 7,20 15.083,6 H 63.58 L 71.663,20 63.58,34 Z M 61.697,30.767 67.919,20 61.697,9.233 H 16.95 L 10.728,20 16.95,30.767 Z"
      />
    </svg>
  );
}
