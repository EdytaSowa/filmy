import { getMovieReviews } from 'components/api/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import css from './Reviews.module.css';

 const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  getMovieReviews(movieId).then(data => setReviews(data));

  return (
    <ul className={css.list}>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li className={css.review} key={review.id}>
            {' '}
            <p className={css.author}><b>{review.author}</b></p>
            {review.content}
           
          </li>
        ))
      ) : (
        <p>Brak recencji</p>
      )}
    </ul>
  );
};

export default Reviews;









