import {People, getById} from './db';

const resolvers = {
    Query : {
        people : () => People,
        person : ( _ , args ) => getById(args.id)

        //( _ , args ) , ( _ , {id} ) 같은의미 args가 json으로 받아드림
    }
}

export default resolvers;