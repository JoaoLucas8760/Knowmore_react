import { use, useState } from "react";
import * as S from "./styles";
import { CaretDown, CaretUp } from "phosphor-react";
import Class from "../ListClasses";

interface props {
  index: string;
  title: string;
  data: Array<any>;
  childToParent: any;
}

export default function Module({ index, title, data, childToParent }: props) {
  const [ListIsOpen, setListIsOpen] = useState(false);
  const [modulo] = useState(data);
  const [selectedClass, setSelectedClass] = useState([]);

  function HandleOpenList() {
    setListIsOpen(true);
  }

  function HandleCloseList() {
    setListIsOpen(false);
  }

  function handle(item: any) {
    setSelectedClass(item);
  }
  return (
    <S.Container onClick={() => childToParent(selectedClass)}>
      <S.ContainerModule>
        <S.InfoBox>
          <S.IndexModule>
            <h1>{index}</h1>
          </S.IndexModule>
          <S.Title>
            <h1>{title}</h1>
          </S.Title>
        </S.InfoBox>

        <S.ActionButton>
          {ListIsOpen === false ? (
            <button onClick={HandleOpenList}>
              <CaretDown size={16} color="#374151" />
            </button>
          ) : (
            <button onClick={HandleCloseList}>
              <CaretUp size={16} color="#374151" />
            </button>
          )}
        </S.ActionButton>
      </S.ContainerModule>
      {ListIsOpen === true
        ? modulo.map((item, index) => (
            <Class
              onClick={() => handle(item)}
              title={item.TitleClass}
              index={index + 1}
              key={index}
            />
          ))
        : undefined}
    </S.Container>
  );
}
