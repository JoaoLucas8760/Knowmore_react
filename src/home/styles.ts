import { styled } from "../../styles/global";

export const Container = styled("div", {});

export const Body = styled("div", {
  display: "flex",
  paddingLeft: "10rem",
  paddingTop: "3rem",
  paddingRight: "6rem",
});

export const ListCourses = styled("div", {
  display: "flex",
  maxWidth: "80rem",

  gap: "2rem",

  flexWrap: "wrap",
});

export const ContainerAds = styled("div", {
  width: "50rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const Anuncio = styled("div", {
  height: "20rem",
  maxWidth: "29rem",
  background: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
