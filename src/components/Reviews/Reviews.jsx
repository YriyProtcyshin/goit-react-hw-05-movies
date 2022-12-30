import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from "./Reviews.module.css"
import { getReviews } from 'api';

const Reviews = () => {
    
    const param = useParams()

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getReviews(param.id).then(setReviews)
    },[param.id])

    return (
        <ul className={ css.reviews_list}>
            {reviews.length > 0
                ? reviews.map(review =>
                <li className={css.reviews_item} key={ review.id}>
                    <div className={css.review_author}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${review['author_details']['avatar_path']}`}
                            alt={review.author}
                            width="150px" />                        
                        {review.author}
                    </div>
                    <div className={ css.review_content}>
                        {review.content}
                    </div>
                    </li>
                )
                : <div>We don't have any reviews for this movie</div>
                }
        </ul>
    )
}

export default Reviews;