import { Outlet, Link } from 'react-router-dom';
// import css from './SharedLayout .module.css'

export const SharedLayout = () => {
  return (
    <>
      <nav >
        <Link  to="/">Home</Link>
        <Link  to="/movies">Movies</Link>
      </nav>

      <Outlet />
    </>
  );
};
