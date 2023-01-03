import { useEffect } from "react";
import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useParams, Outlet, NavLink, Link, useLocation } from "react-router-dom"
import no_image from "../../no-image.jpg"

import { getMovieDetail } from "../../api"
import css from "./MoviesDetail.module.css"

const MoviesDetail = () => {
    const location = useLocation()
    const goBack = location.state?.from ?? "/"    

    const [movieDetail, setMovieDetail] = useState([])

    const param = useParams() 
    
    useEffect(() => {        
        getMovieDetail(param.id).then(setMovieDetail)
    }, [param.id])

    if (movieDetail.length === 0) {
        return (
            <div>something wrong  (:</div>
        )
    }
    
    const linkImage = `https://image.tmdb.org/t/p/w500/${movieDetail['poster_path']}`     
    const userScore = Math.round(Number(movieDetail['vote_average']) * 10)
   
    

    return (
        <>           
            <Link to={goBack} className={css.goBack}><IoArrowBackCircleSharp/>Go back</Link>
            <div className={ css.movie}>
                <div className={css.movie_image}>
                    <img src={movieDetail['poster_path']?linkImage: no_image} alt="" height='350px' width="233px"/>
                </div>
                <div className={css.movie_detail}>
                    <h2>{movieDetail['original_title'] || movieDetail['original_name']}</h2>
                    <p>User Score: {userScore}%</p>
                    <b>Overview:</b>
                    <p>{movieDetail.overview}</p>
                    <b>Genres:</b>
                    <ul className={css.genres}>
                        {movieDetail.genres && movieDetail.genres.map((genre, id, arr) => (
                            <li key={genre['id']}>{`${genre['name']}${id !== arr.length-1 ? "," : ""}`}</li>                           
                        ))}
                    </ul>               
                </div>
            </div>
            <div className={css.add_info}>                
                <b>Additional information</b>
                <ul className={css.add_info_list}>
                    <li><NavLink to="cast" className={css.add_info__link} state={{from:location.state?.from} ?? "/"}>Cast</NavLink></li>
                    <li><NavLink to="reviews" className={css.add_info__link} state={{from:location.state?.from} ?? "/"}>Reviews</NavLink></li>
                </ul>                
                <Outlet />
            </div>
        </>
    )
}
export default MoviesDetail