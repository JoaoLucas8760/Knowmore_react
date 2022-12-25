import { styled } from "../../../../styles/global";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.11rem",
});

export const ContainerModule = styled("div", {
  height: "6rem",
  width: "56rem",
  backgroundColor: "#000a0f",
  display: "flex",
  justifyContent: "space-between",

  alignItems: "center",
  borderRadius: "0.5rem",
});

export const IndexModule = styled("div", {
  marginLeft: "1rem",
  width: "4.4rem",
  height: "4.4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "0.15rem solid white",
  borderRadius: "50%",
});

export const Title = styled("div", {
  h1: {
    fontWeight: 400,
  },
  display: "flex",
});

export const InfoBox = styled("div", {
  display: "flex",
  gap: "3rem",
  alignItems: "center",
});

export const ActionButton = styled("div", {
  marginTop: "-3rem",
  marginRight: "2rem",
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
});

export const VideoResponsive = styled("div", {});
