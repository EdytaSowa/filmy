import { Link } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return (
    <button>
      <Link to={to}>{children}</Link>
    </button>
  );
};
