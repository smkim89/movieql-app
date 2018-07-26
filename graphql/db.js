let Movies = [
    {
        id : "0",
        name : "어벤져스",
        score : 99
    },
    {
        id : "1",
        name : "쇼생크탈출",
        score : 3
    },
    {
        id : "3",
        name : "메트릭스",
        score : 55
    }

];

export const getMovie = () => Movies;

export const getById = id => {
    const fillterdPeople = Movies.filter(movie => movie.id === String(id));
    console.log(fillterdPeople[0]);
    return fillterdPeople[0];
}

export const addMovie = (name, score) => {
    const newMovie = {
        "id" : `${Movies.length +1}`,
        "name" : name,
        "score" : score
    }
    
    Movies.push(newMovie);
    return newMovie;
}

export const deleteMovie = (id) => {
    const deleteMovies = Movies.filter(movie => movie.id !== String(id));
    if(Movies.length > deleteMovies.length){
        Movies = deleteMovies;
        return true;
    }else{
        return false;
    }
}