import * as S from "./styles";

import React, { useState } from "react";

interface props {
  index: number;
  title: string;
  onClick: () => void;
}

export default function Class({ index, title, onClick }: props) {
  return (
    <div onClick={onClick}>
      <S.Container>
        <h1>{index}.</h1>

        <S.Title>{title}</S.Title>
      </S.Container>
    </div>
  );
}
