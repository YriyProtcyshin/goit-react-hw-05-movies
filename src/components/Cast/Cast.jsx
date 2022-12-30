import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from "./Cast.module.css"
import no_image from "../../no-image.jpg"

import {getCast} from "../../api"


const Cast = () => {
    const param = useParams()   
    
    const [actors, setActors] = useState([])  
    
    useEffect(() => { 
       getCast(param.id).then(setActors)
    },[param.id])

    
    return (                
        <ul className={css.cast_list}>
            {actors.length > 0 && actors.map(actor =>
                <li key={actor.id} className={css.cast_item}>
                    <div className={ css.cast_image}>
                        <img src={actor['profile_path']
                            ? `https://image.tmdb.org/t/p/w500/${actor['profile_path']}`
                            : no_image}
                            alt={actor.name} width="140px"  />
                    </div> 
                    <div className={ css.cast_name}>
                        <span>{actor.name}</span> 
                        <span>[{actor.character}] </span>
                    </div>
                    
                </li>
            )}
        </ul>       
    )
}

export default Cast;


