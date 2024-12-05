import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // general
        dark: "#000000",
        light: "#FFFFFF",
        // light
        primary: "#FDFDFD",
        secondary: "#DBDBDB",
        tertiary: "#B9B9B9",
        accent: "#EDEDED",
        accentLight: "#BDBDBD",
        accentDark: "#6A6A6A",
        // dark
        darkPrimary: "#121212",
        darkSecondary: "#232323",
        darkTertiary: "#343434",
        darkAccent: "#FFFFFF",
        darkAccentDark: "#FFFFFF50",
        darkAccentLight: "#FFFFFF90",

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
        },
        openResponsiveNav: {
          "from": {
            width: '0',
          },
          "to": {
            width: '100vw',
          }
        },
        closeResponsiveNav: {
          "from": {
            width: '100vw',
          },
          "to": {
            width: '0',
          }
        },
        fadeInFromBottom: {
          "from": {
            opacity: '0%',
            transform: 'translateY(100px)',
          },
          "to": {
            opacity: '50%',
            transform: 'translateY(0%)',
          }
        },
        fadeInFromTop: {
          "from": {
            opacity: '0%',
            transform: 'translateY(-100px)',
          },
          "to": {
            opacity: '50%',
            transform: 'translateY(0%)',
          }
        }
      },
      animation: {
        toDark: 'toDark 300 ease-in-out forwards',
        toLight: 'toLight 300 ease-in-out forwards',
        show: 'show 700ms ease-in-out forwards',
        openResponsiveNav: 'openResponsiveNav 300ms ease-in-out forwards',
        closeResponsiveNav: 'closeResponsiveNav 300ms ease-in-out forwards',
        fadeInFromBottom: 'fadeInFromBottom 1000ms ease-in-out forwards',
        fadeInFromTop: 'fadeInFromTop 1000ms ease-in-out forwards',
      },
    },
  },
  darkMode: "class",
};

export default config;
