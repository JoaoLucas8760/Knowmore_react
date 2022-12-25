import { styled } from "../../../../styles/global";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  height: "3rem",
  width: "55.5rem",
  background: "#000e14",
  borderRadius: "0.4rem",
  padding: "1rem",
  gap: "2rem",
  h1: {
    fontSize: "1.5rem",
    fontWeight: 500,
  },
  borderBottom: "0.2rem solid",
  borderColor: "$grey3",
  cursor: "pointer",
});

export const Title = styled("h1", {
  fontWeight: 400,
});

export const Clickable = styled("button", {
  background: "none",
  border: "none",
  color: "$grey9",
});
