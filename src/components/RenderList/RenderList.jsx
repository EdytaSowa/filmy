import { Link } from "react-router-dom";
import css from './RenderList.module.css'


export const RenderList = ({ movies }) => {
  return (
    <div>
      <ul className={css.list}>
        {movies.map(movie => (
          <li className={css.movie} key={movie.id}><Link to={`${movie.id}`}>{movie.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};
