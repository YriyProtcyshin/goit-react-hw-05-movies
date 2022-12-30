import css from "./Home.module.css"
import {getTrendingMovie} from "../../api"
import { useState, useEffect } from "react"
import { MoviesList } from "components/ListMovies/MovieList"

export const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
       getTrendingMovie().then(setMovies)       
    }, [])
    
    return (
        <>
            <h1>Trending today</h1>
            <ul className={css.list}>
                <MoviesList movies={movies} />  
            </ul>
        </>
    )
}