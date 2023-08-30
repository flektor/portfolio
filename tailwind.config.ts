import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        beat: {
          "0%, 100%": { transform: "scale(0.8)" },
          "70%": { transform: "scaleX(1)" },
        },
        flip: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scaleX(-1)" },
        },

        levitate: {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
          },
          "70%": {
            transform: "translateY(-4px) translateX(-2px)",
          },
        },
      },

      animation: {
        "spin-slow": "spin 8s linear infinite",
        beat: "beat 2s infinite",
        flip: "flip 4s infinite",
        levitate: "levitate 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
