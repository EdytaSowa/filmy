import { getMovieCredits } from 'components/api/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  getMovieCredits(movieId).then(data => setCast(data));

  return (
    <div>
      {cast.map(actor => (
        <li key={actor.id}>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${actor.profile_path}`}
              alt="actor poster"
            ></img>
          ) : (
            <p>No picture</p>
          )}

          <p>  {actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </div>
  );
};
