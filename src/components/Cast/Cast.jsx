import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from "./Cast.module.css"

import { getCast } from "../../api"
import { CastList } from './CastList';


const Cast = () => {
    const param = useParams()   
    
    const [actors, setActors] = useState([])  
    
    useEffect(() => { 
       getCast(param.id).then(setActors)
    },[param.id])

    
    return (                
        <ul className={css.cast_list}>
            { actors.length > 0
                ? <CastList actors={actors}/>
                : <div>We don't have any actors for this movie :(</div>
            }
            
        </ul>       
    )
}

export default Cast;


