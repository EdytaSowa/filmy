import { Routes, Route, Link } from 'react-router-dom';

import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<MovieDetails />} /> 
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
