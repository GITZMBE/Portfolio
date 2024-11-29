import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // general
        dark: "#000000",
        light: "#FFFFFF",
        // light
        primaryLight: "#FDFDFD",
        secondaryLight: "#DFDFDF",
        tertiaryLight: "#CDCDCD",
        overPrimaryLight: "#00000090",
        overSecondaryLight: "#00000050",
        overDark: "#DFDFDF",
        quaternaryLight: "#AAAAAA",
        // dark
        primaryDark: "#123123",
        secondaryDark: "#152025",
        tertiaryDark: "#234234",
        quaternaryDark: "#253545",
        darkOverPrimaryDark: "#FFFFFF90",
        lightOverPrimaryDark: "#FFFFFF",

        error: "#FF0000",
      },
      keyframes: {
        toDark: {
          "to": {
            left: 'auto',
            right: '3px'
          }
        },
        toLight: {
          "to": {
            left: '3px',
            right: 'auto'
          }
        },
        show: {
          "from": {
            transform: 'translateY(-100px)',
            opacity: '0',
          },
          "to": {
            transform: 'translateY(0)',
            opacity: '1',
          }
        }
      },
      animation: {
        toDark: 'toDark 300 ease-in-out forwards',
        toLight: 'toLight 300 ease-in-out forwards',
        show: 'show 700ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
