import { useState } from "react";
import { useLocation, Link, useSearchParams } from "react-router-dom";
import css from "./Movies.module.css"
import { searchMovie } from "api";
import { useEffect } from "react";


const Movie = () => {

    const location = useLocation()

    const [searchParam, setSearchParam] = useSearchParams()
    const query = searchParam.get('query') ?? ""
    
    const [input, setInput] = useState(query)
    const [films, setFilms] = useState([])
    

    const changeFilter = (e) => {
        e.preventDefault()
        const { value } = e.target.search
        setSearchParam(value !== "" ? {query:value}: "" )
    }    

    useEffect(() => {
        if (query === '') {
            setFilms([])
            return
        }
        searchMovie(query).then(setFilms)
    },[query])

    return (
        <>
            <div className="">
                <form action="" onSubmit={changeFilter} className={css.form}>
                    <input type="text" name="search" value={input} onChange={ e=>setInput(e.target.value)} />
                    <button type="submit">Search</button>
                </form>            
            </div>
            <ul className={css.list}>
                {films.length > 0 && 
                    films.map(film =>
                        <li key={film.id}>
                        <Link to={`${film.id}`} state={{ from: location }}>{film.title}</Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Movie;