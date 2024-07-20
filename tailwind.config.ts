import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          foreground: "#000000", // Black text for light theme
          background: "#FFFFFF", // White background for light theme
          primary: "#000000", // Primary color for light theme
          secondary: "#F0F0F0", // Light grey for secondary elements
          default: "#66016A", // Blue for default
        },
        dark: {
          foreground: "#FFFFFF", // White text for dark theme
          background: "#121212", // Almost black background for dark theme
          primary: "#FFFFFF", // Primary color for dark theme
          secondary: "#1F1F1F", // Dark grey for secondary elements
          default: "#66016A", // Blue for default
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            foreground: "#000000", // Black text for light theme
            background: "#FFFFFF", // White background for light theme
            primary: "#000000", // Primary color for light theme
            secondary: "#F0F0F0", // Light grey for secondary elements
            default: "#66016A", // Blue for default
          },
        },
        dark: {
          colors: {
            foreground: "#FFFFFF", // White text for dark theme
            background: "#121212", // Almost black background for dark theme
            primary: "#FFFFFF", // Primary color for dark theme
            secondary: "#1F1F1F", // Dark grey for secondary elements
            default: "#66016A", // Blue for default
          },
        },
      },
    }),
  ],
};
export default config;
