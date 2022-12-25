import React, { useEffect, useState } from "react";
import Header from "../home/components/header";
import Video from "./components/Iframe";
import Module from "./components/modulecomponent";
import * as S from "./styles";

const modulo1 = [
  {
    TitleClass: "Aula 1",
    embedId: "https://www.youtube.com/embed/a3ICNMQW7Ok",
    numberClass: "1",
  },
  {
    TitleClass: "Aula 2",
    embedId: "https://www.youtube.com/embed/anaL5JtahHk",
    numberClass: "2",
  },
  {
    TitleClass: "Aula 3",
    embedId: "https://www.youtube.com/embed/1aMi8mror1k",
    numberClass: "3",
  },
];

const modulo2 = [
  { TitleClass: "ISSO MESMO" },
  { TitleClass: "Logica de program" },
  { TitleClass: "mao na massa" },
];
const modulo3 = [
  { TitleClass: "FOI BEM" },
  { TitleClass: "LFOF" },
  { TitleClass: "mao na massa" },
];

interface DataProps {
  TitleClass: string;
  numberClass: string;
  embedId: string;
}

export default function Course() {
  const [data, setData] = useState<DataProps[]>([]);
  const childToParent = (childdata: any) => {
    setData(childdata);
    console.log(childdata);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.Body>
          {data.TitleClass !== undefined ? (
            <Video
              index={data.numberClass}
              title={data.TitleClass}
              embedId={data.embedId}
            />
          ) : undefined}
        </S.Body>

        <S.ContainerModules>
          <Module
            index="1"
            title="Comece por aqui"
            data={modulo1}
            childToParent={childToParent}
          />
          {/* <Module
            index="2"
            title="Agora você já sabe"
            data={modulo2}
            
          />
          <Module
            index="3"
            title="Encerrando"
            data={modulo3}
            
          /> */}
        </S.ContainerModules>
      </S.Container>
    </>
  );
}
