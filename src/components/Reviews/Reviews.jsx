import {getMovieReviews} from 'components/api/api'

import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const Reviews = () => {

    const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  getMovieReviews(movieId).then(data => setReviews(data))


  return (
    <div>

      {reviews.length > 0 ? reviews.map(review => (
          <li key={review.id}> <p>{review.author}</p>{review.content}</li>
        )): <p>Brak recencji</p>}

      

    </div>
  )

}