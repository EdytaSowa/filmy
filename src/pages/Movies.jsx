import  {RenderList} from 'components/RenderList/RenderList';
import { searchMovies } from 'components/api/api';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


 const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({query: e.target.elements.search.value})
    const movieTitle = searchParams.get('query');
    if (movieTitle) {searchMovies(movieTitle).then(data => setMovies(data));}
    // const searchValue = e.target.elements.search.value;
    
    //  searchMovies(searchValue).then(data => setMovies(data));
     
  };

  return (
    <div>
       
      <form onSubmit={handleSubmit}>
        <input name="search" type="text" />
        <button type="submit">Search</button>
      </form> 
      <RenderList movies={ movies } />
    </div>
  );
};


export default Movies;