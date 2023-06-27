import { getMovieDetails } from 'components/api/api';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import css from './MovieDetails.module.css';

import { Link, Outlet, useLocation } from 'react-router-dom';

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/');

  getMovieDetails(movieId).then(data => setDetails(data));

  return (
    <div className={css.wrapper}>
      <div>
        {' '}
        <button className={css.btn}>
          <Link to={backLinkHref.current}>Go back</Link>
        </button>
        {details.poster_path ? (
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${details.poster_path}`}
            alt="movie poster"
          ></img>
        ) : (
          ''
        )}
      </div>
      <div>
        <h5 className={css.title}>
          {details.title}{' '}
          {details.release_date ? details.release_date.substring(0, 4) : ''}
        </h5>

        <p className={css.description}>User score: {details.vote_average}</p>

        <h6 className={css.overview}>Overviews</h6>
        <p className={css.description}>{details.overview}</p>

        <h6 className={css.overview}>Genres</h6>
        {details.genres && details.genres.length > 0 ? (
          <p className={css.description}>
            {details.genres.map(genre => genre.name).join(', ')}
          </p>
        ) : (
          <p className={css.description}>No genres available</p>
        )}
      </div>

      <div className={css.info}>
        <h6 className={css.description}>Additional information</h6>
        <ul>
          <li>
            {' '}
            <Link to="reviews"> Reviews </Link>
          </li>

          <li>
            <Link to="cast"> Cast </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};
