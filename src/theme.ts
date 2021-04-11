import theme from "styled-theming";

export const backgroundColor: theme.ThemeSet = theme("mode", {
  light: "#fafafb",
  dark: "#0e0f11",
});

export const boxShadow: theme.ThemeSet = theme("mode", {
  light: "inset 0px -1px 0px #e2e2ea",
  dark: "inset 0px -1px 0px #0e0f11",
});

export const textColor: theme.ThemeSet = theme("mode", {
  light: "#191919",
  dark: "#fff",
});

export const inputBg: theme.ThemeSet = theme("mode", {
  light: "#fafafb",
  dark: "#292932",
});

export const inputBorder: theme.ThemeSet = theme("mode", {
  light: "#f1f1f5",
  dark: "#292932",
});

export const cardBg: theme.ThemeSet = theme("mode", {
  light: "#ffffff",
  dark: "#292932",
});

export const cardText: theme.ThemeSet = theme("mode", {
  light: "#000",
  dark: "#fff",
});

export const cardBtn: theme.ThemeSet = theme("mode", {
  light: "#0062ff",
  dark: "#292932",
});

export const cardBtnText: theme.ThemeSet = theme("mode", {
  light: "#fff",
  dark: "#fff",
});

export const cardDetailsText: theme.ThemeSet = theme("mode", {
  light: "#44444f",
  dark: "#92929d",
});

export const filterBg: theme.ThemeSet = theme("mode", {
  light: "#fff",
  dark: "#292932",
});

export const tittleColor: theme.ThemeSet = theme("mode", {
  light: "#171725",
  dark: "#fff",
});
