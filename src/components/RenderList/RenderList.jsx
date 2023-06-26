import { Link } from "react-router-dom";


export const RenderList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}><Link to={`${movie.id}`}>{movie.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};
