import * as S from "./styles";

import CourseCard from "./components/coursecard";
import Header from "./components/header";
import Link from "next/link";

const data = [
  {
    name: "dropshopping",
    autor: "Joao souza",
    data: "11/02/2019",
    imagem:
      "https://downloadcursos.top/wp-content/uploads/2022/12/mentoria-do-futuro.png",
    download: "https://downloadcursos.top/mentoria-do-futuro-thales-baiao/",
  },
  {
    name: "Fullstack",
    autor: "Caio rafael",
    data: "28/07/2021",
    imagem: "",
    download: "https://downloadcursos.top/o-novo-dropshipping-modulo-0-ao-7/",
  },
  {
    name: "Hacking",
    autor: "Hacker sec",
    data: "11/02/2019",
    imagem:
      "https://downloadcursos.top/wp-content/uploads/2022/12/flordelis.png",
    download: "https://downloadcursos.top/o-novo-dropshipping-modulo-0-ao-7/",
  },
  {
    name: "dropshopping",
    autor: "Joao souza",
    data: "11/02/2019",
    imagem:
      "https://downloadcursos.top/wp-content/uploads/2022/12/mentoria-do-futuro.png",
    download: "https://downloadcursos.top/mentoria-do-futuro-thales-baiao/",
  },
  {
    name: "Fullstack",
    autor: "Caio rafael",
    data: "28/07/2021",
    imagem: "",
    download: "https://downloadcursos.top/o-novo-dropshipping-modulo-0-ao-7/",
  },
  {
    name: "Hacking",
    autor: "Hacker sec",
    data: "11/02/2019",
    imagem:
      "https://downloadcursos.top/wp-content/uploads/2022/12/flordelis.png",
    download: "https://downloadcursos.top/o-novo-dropshipping-modulo-0-ao-7/",
  },
  {
    name: "dropshopping",
    autor: "Joao souza",
    data: "11/02/2019",
    imagem:
      "https://downloadcursos.top/wp-content/uploads/2022/12/mentoria-do-futuro.png",
    download: "https://downloadcursos.top/mentoria-do-futuro-thales-baiao/",
  },
];

export default function Homepage() {
  return (
    <S.Container>
      <Header />

      <S.Body>
        <S.ListCourses>
          {data.map((item, index) => (
            <Link href="/course">
              <CourseCard
                key={index}
                nome={item.name}
                autor={item.autor}
                data={item.data}
                imagem={item.imagem}
              />
            </Link>
          ))}
        </S.ListCourses>

        <S.ContainerAds>
          <S.Anuncio>
            <strong>ANÚNCIO</strong>
          </S.Anuncio>

          <S.Anuncio>
            <strong>ANÚNCIO</strong>
          </S.Anuncio>
        </S.ContainerAds>
      </S.Body>
    </S.Container>
  );
}
