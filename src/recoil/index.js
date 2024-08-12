import { atom } from "recoil";

export const darkModeState = atom({
  key: 'darkMode',
  default: false,
});

export const showRelativeNavbarState = atom({
  key: 'showRelativeNavbar',
  default: false,
});
