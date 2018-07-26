import {getMovie, getById, addMovie, deleteMovie} from './db';

const resolvers = {
    Query : {
        movies : () => getMovie(),
        movie : ( _ , args ) => getById(args.id)

        //( _ , args ) , ( _ , {id} ) 같은의미 args가 json으로 받아드림
    },
    Mutation : {
        addMovie : (_, {name, score}) => addMovie(name, score),
        deleteMovie :(_, {id}) => deleteMovie(id)
    }
}

export default resolvers;