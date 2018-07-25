export const People = [
    {
        id : "0",
        name : "Eunmi",
        age : "29",
        gender : "F"
    },
    {
        id : "1",
        name : "SungMin",
        age : "30",
        gender : "M"
    },
    {
        id : "3",
        name : "Jisu",
        age : "25",
        gender : "F"
    }

];


export const getById = id => {
    const fillterdPeople = People.filter(person => person.id === String(id));
    console.log(fillterdPeople[0]);
    return fillterdPeople[0];
}