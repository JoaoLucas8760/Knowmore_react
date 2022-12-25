import { styled } from "../../../../styles/global";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "16rem",
  width: "20rem",
  backgroundColor: "$grey3",
  borderRadius: "0.5rem",
  padding: "0.3rem",
});

export const Banner = styled("div", {
  height: "10rem",

  backgroundColor: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  h1: {
    fontSize: "1rem",
  },
});

export const Infos = styled("div", {
  padding: "0.2rem",
  display: "flex",
  flexDirection: "column",
  div: {
    display: "flex",
    gap: "0.4rem",
    height: "2rem",
    alignItems: "center",
  },
});

export const Title = styled("h1", {
  color: "$grey4",
  fontSize: "0.7rem",
  fontWeight: 500,
});

export const Text = styled("h1", {
  color: "#B2ACAC",
  fontSize: "0.8rem",
  fontWeight: 500,
});

export const img = styled("img", {
  maxHeight: "10rem",
});
