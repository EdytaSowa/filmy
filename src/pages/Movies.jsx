import  {RenderList} from 'components/RenderList/RenderList';
import { searchMovies } from 'components/api/api';
import { useState } from 'react';

 const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    
     searchMovies(searchValue).then(data => setMovies(data));
     
  };

  return (
    <div>
       
      <form onSubmit={handleSubmit}>
        <input name="search" type="text" />
        <button type="submit">Search</button>
      </form> 
      <RenderList movies={ movies }/>
    </div>
  );
};


export default Movies;