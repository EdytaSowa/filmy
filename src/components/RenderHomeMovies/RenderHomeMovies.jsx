import { Link } from "react-router-dom";
import css from './RenderHomeMovies.module.css'


export const RenderHomeMovies = ({ movies, path }) => {
  return (
    <div>
      <ul className={css.list}>
        {movies.map(movie => (
          <li className={css.movie}key={movie.id}><Link to={`${path}${movie.id}`}>{movie.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};
