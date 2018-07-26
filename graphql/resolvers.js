import {getMovie} from './api';

const resolvers = {
    Query : {
        movies : (_, {limit, rating}) => getMovie(limit, rating)

        //( _ , args ) , ( _ , {id} ) 같은의미 args가 json으로 받아드림
    }
}

export default resolvers;