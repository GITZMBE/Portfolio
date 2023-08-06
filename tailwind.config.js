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
      height: {
        headerOffset: "4rem",
        5.5: "1.375rem",
      },
      margin: {
        headerOffset: "4rem",
        "10vh": "10vh",
      },
      padding: {
        headerOffset: "4rem",
        buttonPadding: "3px",
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
        // dark
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
      },
      animation: {
        toDark: 'toDark 300ms ease-in-out forwards',
        toLight: 'toLight 300ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
