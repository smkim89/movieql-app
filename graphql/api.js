// import fetch from 'node-fetch';
import axios from 'axios';

const BASE_URL = "https://yts.am/api/v2";
const LIST_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}/movie_details.json`;
const SUGGESTIONS_URL = `${BASE_URL}/movie_suggestions.json`;

// export const getMovie = (limit, rating) => {
//     let REQUEST_URL = API +'?';
//     if(limit>0){
//         REQUEST_URL += `limit=${limit}&`;
//     }
//     if(rating>0){
//         REQUEST_URL += `minimum_rating=${rating}&`;
//     }
//     console.log(REQUEST_URL);
//     return fetch(`${REQUEST_URL}`)  //`${}` String으로 변환하는 것.
//     .then(res => res.json())
//     .then(json => json.data.movies);
// }


export const getMovie = async (limit, rating) => {
    const {
        data : {
            data : {movies}
        }
    } = await axios (LIST_URL, {
        params : {
            limit : limit,
            minimum_rating : rating
        }
    });
    return movies;
};

export const getMovieDetail = async id => {
    const {
        data : {
            data : {movie}
        }
    } = await axios (MOVIE_DETAIL_URL, {
        params : {
            movie_id : id
        }
    });
    return movie;
};

export const getMovieSuggestions = async id => {
    const {
        data : {
            data : {movies}
        }
    } = await axios (SUGGESTIONS_URL, {
        params : {
            movie_id : id
        }
    });

    return movies;
};
