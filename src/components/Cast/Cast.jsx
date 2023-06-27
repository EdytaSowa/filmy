import { getMovieCredits } from 'components/api/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import css from './Cast.module.css'

 const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  getMovieCredits(movieId).then(data => setCast(data));

  return (

    <ul className={css.list}>

      {cast.length > 0 ? (
      cast.map(actor => (
        <li className={css.actor} key={actor.id}>
          {actor.profile_path ? (
            <img className={css.image}
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${actor.profile_path}`}
              alt="actor poster"
            ></img>
          ) : (
            <p>No picture</p>
          )}

          <p> {actor.name}</p>
          <p><b>Character:</b> {actor.character}</p>
        </li>
      ))) : <p>Brak aktorów</p>}

    </ul>
  );
};


export default Cast;