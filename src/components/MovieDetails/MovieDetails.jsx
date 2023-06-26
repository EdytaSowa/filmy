import { getMovieDetails } from 'components/api/api';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
// import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  
  const backLinkHref = useRef(location.state?.from ?? "/")

 
  getMovieDetails(movieId).then(data => setDetails(data));

  return (
    <div>
      <button>
          <Link to={backLinkHref.current}>Go back</Link>
    </button>
      {details.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${details.poster_path}`}
          alt="movie poster"
        ></img>
      ) : (
        ''
      )}

      <h5>
        {details.title}{' '}
        {details.release_date ? details.release_date.substring(0, 4) : ''}
      </h5>

      <p>User score: {details.vote_average}</p>

      <h5>Overviews</h5>
      <span>{details.overview}</span>

      <h5>Genres</h5>
      {details.genres && details.genres.length > 0 ? (
        <p>{details.genres.map(genre => genre.name).join(', ')}</p>
      ) : (
        <p>No genres available</p>
      )}
      <h6>Additional information</h6>
      <ul>
        <li>
          {' '}
          <Link to="reviews"> Reviews </Link>
        </li>

        <li>
          <Link to="cast"> Cast </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
