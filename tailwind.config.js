/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,css,js,jsx}", 
    "./public/index.html"
  ],
  //  npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        buttonPadding: "3px",
        headerOffset: "4rem",
      },
      backgroundColor: {
        // general
        dark: "#000000",
        light: "#FFFFFF",
        // light
        primaryLight: "#FDFDFD",
        secondaryLight: "#DFDFDF",
        tertiaryLight: "#CDCDCD",
        quaternaryLight: "#AAAAAA",
        // dark
        primaryDark: "#123",
        secondaryDark: "#152025",
        tertiaryDark: "#234",
        quaternaryDark: "#253545",
      },
      colors: {
        // general
        dark: "#000000",
        light: "#FFFFFF",
        // light
        overPrimaryLight: "#00000090",
        overSecondaryLight: "#00000050",
        overDark: "#DFDFDF",
        quaternaryLight: "#AAAAAA",
        // dark
        darkOverPrimaryDark: "#FFFFFF90",
        lightOverPrimaryDark: "#FFFFFF",
      },
      fill: {
        dark: "#000000",
        overPrimaryLight: "#00000090",
        darkOverPrimaryDark: "#FFFFFF90",
        lightOverPrimaryDark: "#FFFFFF",
      },
      transitionDuration: {
        modeSwitchDuration: "300ms",
      },
      zIndex: {
        1: "1",
      },
      aspectRatio: {
        dubble: "2 / 1",
      },
      left: {
        buttonPadding: "3px",
      },
      borderWidth: {
        "1px": "1px",
      },
      dropShadow: {
        "h1-shadow": "0 0 10px #000000",
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
            opacity: 0,
          },
          "to": {
            transform: 'translateY(0)',
            opacity: 1,
          }
        }
      },
      animation: {
        toDark: 'toDark modeSwitchDuration ease-in-out forwards',
        toLight: 'toLight modeSwitchDuration ease-in-out forwards',
        show: 'show 700ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
