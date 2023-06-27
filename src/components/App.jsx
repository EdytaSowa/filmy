import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout ';


// import { Movies } from '../pages/Movies';
const Movies = lazy(()=> import('../pages/Movies'))
// import { NotFound } from '../pages/NotFound';
const NotFound = lazy(()=> import('../pages/NotFound'))
// import { Home } from '../pages/Home';
const Home = lazy(() => import("../pages/Home"));

const MovieDetails = lazy(()=>import('./MovieDetails/MovieDetails'))
// import { MovieDetails } from './MovieDetails/MovieDetails';
const Reviews = lazy(()=> import('./Reviews/Reviews'))
// import { Reviews } from './Reviews/Reviews';

const Cast = lazy(()=> import('./Cast/Cast'))
// import { Cast } from './Cast/Cast';

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
