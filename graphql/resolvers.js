import {getMovie, getMovieDetail, getMovieSuggestions} from './api';

const resolvers = {
    Query : {
        movies : (_, {limit, rating}) => getMovie(limit, rating),
        movieDetail : (_, { id }) => getMovieDetail(id),
        movieSuggestions : (_, { id }) => getMovieSuggestions(id)
        //( _ , args ) , ( _ , {id} ) 같은의미 args가 json으로 받아드림
    }
}

export default resolvers;