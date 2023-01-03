import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from "./Reviews.module.css"
import { getReviews } from 'api';
import {ReviewsList} from "./ReviewsList"

const Reviews = () => {
    
    const param = useParams()

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getReviews(param.id).then(setReviews)
    },[param.id])

    return (
        <ul className={ css.reviews_list}>
            {reviews.length > 0
                ? <ReviewsList reviews={reviews} />
                : <div>We don't have any reviews for this movie</div>
                }
        </ul>
    )
}

export default Reviews;