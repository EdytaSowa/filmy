import { Outlet, Link } from 'react-router-dom';
import { Suspense } from "react";
import css from './SharedLayout.module.css'

export const SharedLayout = () => {
  return (
    <>
      <nav className={css.nav}>
        <Link className={css.link} to="/">Home</Link>
        <Link  className={css.link} to="/movies">Movies</Link>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
