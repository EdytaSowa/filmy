import { useState } from "react";
import { getTrending } from "components/api/api";
import { RenderList } from "components/RenderList/RenderList";

export const Home = () => {

  const [movies, setMovies] = useState([]);

  getTrending().then(data => setMovies(data));

  return (

  <div>
     <RenderList movies={ movies }/>
    </div>
  );
};
