import { styled } from "../../../../styles/global";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  paddingTop: "3rem",
  paddingLeft: "8rem",
  paddingRight: "8rem",
  paddingBottom: "1rem",
  justifyContent: "space-between",
});

export const BoxInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "4rem",
  div: {
    display: "flex",
    gap: "20px",
    fontSize: "8px",
    color: "$grey4",

    h1: {
      fontWeight: 400,
    },
  },
});

export const backgroundButton = styled("div", {
  backgroundColor: "$grey6",
  height: "34px",

  borderRadius: "0.1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Title = styled("h1", {
  fontFamily: "Poppins",
});

export const Input = styled("input", {
  height: "2.3rem",
  width: "14rem",
  backgroundColor: "$grey6",
  borderRadius: "1rem",
  padding: "0.5rem",
  color: "$grey9",
  fontFamily: "Poppins",

  outline: 0,
});
