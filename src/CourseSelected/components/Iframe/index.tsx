import React from "react";
import * as S from "./styles";

interface props {
  index: string;
  title: string;
  embedId: string;
}

export default function Video({ index, title, embedId }: props) {
  return (
    <div>
      <S.VideoResponsive>
        <h1>
          {index}. {title}
        </h1>

        <iframe
          width="890"
          height="430"
          src={embedId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </S.VideoResponsive>
    </div>
  );
}
