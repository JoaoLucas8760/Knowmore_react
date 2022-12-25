import React from "react";

import * as S from "./styles";
import Link from "next/link";

export default function Header() {
  return (
    <S.Container>
      <S.BoxInfo>
        <S.Title>Knowmore</S.Title>
        <div>
          <Link href="/home">
            <h1>Home</h1>
          </Link>

          <h1>Explorar Cursos</h1>
        </div>
      </S.BoxInfo>

      <S.Input type="text" placeholder="Pesquisar curso" />
    </S.Container>
  );
}
