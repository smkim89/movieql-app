const Person = {
    name : "Eunmi",
    age : "29",
    gender : "F"
};

const resolvers = {
    Query : {
        person : () => Person
    }
}

export default resolvers;