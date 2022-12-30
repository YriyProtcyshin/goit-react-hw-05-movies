import axios from 'axios';
const API_KEY = "d0441be4fdc25d632a912102339ee4f4";

export const getTrendingMovie = () => {
    const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`  
     
     return axios.get(URL)
        .then(function (response) {
            return response.data.results;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getMovieDetail = (movie_id) => {
    const URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    return axios.get(URL)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getCast = (movie_id) => {
    const URL = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`

    return axios.get(URL)
        .then(function (response) {             
             return response.data.cast              
            })
        .catch(function (error) {                
                console.log(error);
            });
}

export const getReviews = (movie_id) => {
    const URL = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`

    return axios.get(URL)
            .then(function (response) {  
                return response.data.results                            
                })
            .catch(function (error) {                
                    console.log(error);
                });
}
export const searchMovie = (query) => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false",`

    return axios.get(URL)
            .then(function (response) {  
                return response.data.results
            })
            .catch(function (error) {                
                console.log(error);
            });    
}