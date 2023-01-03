import css from "./Reviews.module.css"
import no_avatar from "../../no-avatar.jpg"

const getAvatar = (link) => {
    if (!link) {
        return no_avatar
    }
    
    if (link && link.includes('https')) {
        return link.slice(1, -1)
    }
   
    return `https://image.tmdb.org/t/p/w500/${link}`
    
}

export const ReviewsList = ({ reviews }) => {
    
    console.log(reviews)
    return (
        <>
            {reviews.map(review =>           
                <li className={css.reviews_item} key={ review.id}>
                    <div className={css.review_author}>
                        <img
                            src={getAvatar(review['author_details']['avatar_path'])}                           
                            alt={review.author}
                            width="100px" />                        
                        {review.author}
                    </div>
                    <div className={ css.review_content}>
                        {review.content}
                    </div>
                </li>
            )}
        </>
    ) 
} 