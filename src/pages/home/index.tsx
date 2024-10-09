import { useEffect, useState } from "react";
import { api } from "../../servises";
import "./home.css";
import { CardMovie } from "../../components/card/card";

type TypeList = {
  original_title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

export const Home = () => {
  const [listmovie, setListMovie] = useState<TypeList[]>();
  useEffect(() => {
    async function getList() {
      try {
        const res = await api.get("discover/movie");
        setListMovie(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getList();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <ul className="cards">
            {listmovie &&
              listmovie.map((mv, index) => (
                <CardMovie
                  key={index}
                  original_title={mv.original_title}
                  overview={mv.overview}
                  vote_average={mv.vote_average}
                  poster_path={mv.poster_path}
                />
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};
