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
      viewBox="0 0 536.85558 669.5161"
      width="536.85559"
      height="669.51611"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="bubble">
          <path
            ref={bubbleBlobRef}
            id="avatar-blob1"
            d="M 36.452041,146.94694 C 48.203115,98.542288 82.68972,71.554296 140.23657,45.134288 197.90345,18.820303 262.54966,4.7185929 332.87156,2.4205847 403.07582,0.12478763 478.9558,9.6326991 509.93354,53.226889 c 31.09771,43.700203 26.48018,167.303741 24.9171,167.235941 -4.78142,60.18398 -12.82736,117.19803 -18.06568,162.1235 -5.23832,44.92547 -29.25872,153.48329 -60.18871,196.72673 -9.34284,26.62509 -56.36463,57.63831 -108.35536,77.78698 -66.46311,14.8465 -162.46797,17.67705 -225.64433,-2.68119 C 59.540258,634.16668 10.825854,576.18059 3.2222811,514.7138 -4.3788841,453.35524 29.130773,388.51602 32.469318,326.95158 35.692646,265.49759 24.703374,195.45981 36.452041,146.94694"
          />
        </clipPath>

        <g style={{ visibility: "hidden" }}>
          <path
            id="avatar-blob2"
            d="M 472.4923,522.09193 C 449.32722,558.27189 411.32465,597.39571 315.51109,632.19502 236.79467,660.78467 194.44208,660.98137 133.38317,645.96233 39.687856,609.02015 15.348826,549.98507 23.133316,478.99144 30.758566,407.99539 47.363826,350.58695 58.087296,268.36243 68.970116,186.14034 74.128436,79.405255 114.2106,37.469698 154.29275,-4.4658495 265.39204,-7.4592235 347.99007,24.771878 430.74733,57.005407 497.0631,95.302477 516.6252,148.3715 c 19.7204,53.22176 22.8628,131.2944 11.0022,219.56266 -12.7544,84.21342 -31.8108,117.98025 -55.1351,154.15777"
          />
        </g>
      </defs>

      <image
        width={600}
        height={900}
        xlinkHref="/me.jpg"
        clipPath="url(#bubble)"
      />
    </svg>
  );
}
