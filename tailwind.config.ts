import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          main: "#1f80f0",
          text: "#0b305b",
          highlight: "#b9d9ff",
          dark: "#164377"
        },
        orange: {
          main: "#fe8b53",
        },
      },
      fontSize: {
        "head-1": [
          "80px",
          {
            lineHeight: "115%",
            letterSpacing: "-1.6px",
            fontWeight: "600",
          },
        ],
        "head-2": [
          "56px",
          { lineHeight: "110%", fontWeight: "600" },
        ],
        "head-3": [
          "48px",
          { lineHeight: "125%", letterSpacing: "-1px", fontWeight: "600" },
        ],
        "head-4": [
          "32px",
          { lineHeight: "130%", letterSpacing: "-0.8px", fontWeight: "600" },
        ],
        "head-5": ["16px", { lineHeight: "160%", fontWeight: "600" }],
        "head-6": [
          "16px",
          { lineHeight: "1.5", letterSpacing: "2.56px", fontWeight: 700 },
        ],
        "res-head-1": [
          "56px",
          { lineHeight: "115%", letterSpacing: "-1.12px", fontWeight: 600 },
        ],
        "res-head-2": ["32px", { lineHeight: "120%", fontWeight: 600 }],
        "res-head-3": ["24px", { lineHeight: "1.5", fontWeight: 600 }],
        "res-head-4": ["18px", { lineHeight: "130%", fontWeight: 600 }],
        "res-head-5": ["16px", { lineHeight: "160%", fontWeight: 600 }],
        "res-head-6": [
          "12px",
          { lineHeight: "1.5", letterSpacing: "1.44px", fontWeight: 700 },
        ],
        "body-1": [
          "16px",
          {
            lineHeight: "160%",
            fontWeight: 400,
          },
        ],
        "body-p0": ["18px", { lineHeight: "180%", fontWeight: 600 }],
        "res-body-p0": ["16px", { lineHeight: "180%", fontWeight: 600 }],
        "res-body-p2": ["12px", { lineHeight: "160%", fontWeight: 600 }],
        link: ["18px", { lineHeight: "23px", fontWeight: 600 }],
        "res-link": ["18px", { lineHeight: "20px", fontWeight: 600 }],
      },
      fontFamily: {
        Montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      padding: {
        sm: "24px",
        md: "32px",
        xl: "128px",
      },
      margin: {
        sm: "24px",
        md: "32px",
        xl: "128px",
      },
    },
  },
  plugins: [],
} satisfies Config;
