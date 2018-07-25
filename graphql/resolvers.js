const Eunmi = {
    name : "Eunmi",
    age : "29",
    gender : "F"
};

const People = [
    {
        id : 0,
        name : "Eunmi",
        age : "29",
        gender : "F"
    },
    {
        id : 1,
        name : "SungMin",
        age : "30",
        gender : "M"
    },
    {
        id : 3,
        name : "OK",
        age : "29",
        gender : "F"
    }

];

const resolvers = {
    Query : {
        people : () => People,
        person : () => Eunmi
    }
}

export default resolvers;