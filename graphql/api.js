import fetch from 'node-fetch';
const API = "https://yts.am/api/v2/list_movies.json";

export const getMovie = (limit, rating) => {
    let REQUEST_URL = API +'?';
    if(limit>0){
        REQUEST_URL += `limit=${limit}&`;
    }
    if(rating>0){
        REQUEST_URL += `minimum_rating=${rating}&`;
    }
    console.log(REQUEST_URL);
    return fetch(`${REQUEST_URL}`)  //`${}` String으로 변환하는 것.
    .then(res => res.json())
    .then(json => json.data.movies);
}