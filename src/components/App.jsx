import { Routes, Route } from 'react-router-dom';

import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';
import { SharedLayout } from './SharedLayout/SharedLayout ';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        // justifyContent: 'center',
        paddingTop: '30px',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
