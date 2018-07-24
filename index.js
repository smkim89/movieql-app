import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';
 
//PlayGround : database 테스트 하는 기능 graphql-yoga에서 제공.
//localhost:4000

const server = new GraphQLServer({
    typeDefs : "./graphql/schema.graphql",
    //폴더 grapql
    resolvers
});

server.start(() => console.log('GraphQL Server Running'));