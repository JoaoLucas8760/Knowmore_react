import React from "react";
import * as S from "./styles";

interface props {
  nome: string;
  autor: string;
  data: string;
  imagem: string;
}

export default function CourseCard({ nome, autor, data, imagem }: props) {
  return (
    <S.Container>
      {imagem === "" ? (
        <S.Banner>
          <h1>IMAGEM NÃO DISPONIVEL</h1>
        </S.Banner>
      ) : (
        <img src={imagem}></img>
      )}
      <S.Infos>
        <div>
          <S.Title>Nome:</S.Title>
          <S.Text>{nome}</S.Text>
        </div>
        <div>
          <S.Title>Autor:</S.Title>
          <S.Text>{autor}</S.Text>
        </div>
        <div>
          <S.Title>Data:</S.Title>
          <S.Text>{data}</S.Text>
        </div>
      </S.Infos>
    </S.Container>
  );
}
