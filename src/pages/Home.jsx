import { useState } from "react";
import { getTrending } from "components/api/api";
import { RenderHomeMovies } from "components/RenderHomeMovies/RenderHomeMovies";

export const Home = () => {

  const [movies, setMovies] = useState([]);

  getTrending().then(data => setMovies(data));

  return (

  <div>
      <h4>Trending today</h4>
     <RenderHomeMovies path={'movies/'} movies={ movies } />
    </div>
  );
};
