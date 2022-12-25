import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      primary: "#2C388D",
      primaryLight: "#505FC8",
      grey3: "#131F2F",
      grey4: "#868686",
      grey6: "#374151",
      grey9: "#E5E5E5",
    },
  },
  media: {
    1440: "(max-width: 1440px)",
    1250: "(max-width: 1250px)",
    1200: "(max-width: 1200px)",
    1100: "(max-width: 1100px)",
    1000: "(max-width: 1000px)",
    970: "(max-width: 970px)",
    768: "(max-width: 768px)",
    700: "(max-width: 700px)",
    600: "(max-width: 600px)",
    375: "(max-width: 375px)",
  },
  utils: {
    materialCardHeaderColor: (value: string) => ({
      backgroundColor: value,
    }),
  },
});

const globalStyles = globalCss({
  "*": {
    fontFamily: "Aeonik",
    listStyle: "none",
    textDecoration: "none",
    margin: 0,
    padding: 0,
    textAlign: "left",
    border: 0,
    color: "$grey3",
    boxSizing: "border-box",
    outline: 0,
    fontSize: "1.6rem",
    " -webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  button: {
    background: "transparent",
    cursor: "pointer",
    appearance: "none",
  },
  img: {
    display: "block",
    maxWidth: " 100%",
    transition: "all 0.3s ease",
  },
  html: {
    fontSize: "62.5%",
    "@1050": {
      fontSize: "55%",
    },
    "@600": {
      fontSize: "62.5%",
    },
    "@375": {
      fontSize: "58%",
    },
  },
  body: {},
  input: { appearance: "none" },
  textarea: { appearance: "none" },
  ".swiper-wrapper": {
    display: "flex",
    maxWidth: 0,
  },
});
export default globalStyles;
