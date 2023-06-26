import { Link } from "react-router-dom";


export const RenderHomeMovies = ({ movies, path }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}><Link to={`${path}${movie.id}`}>{movie.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};
