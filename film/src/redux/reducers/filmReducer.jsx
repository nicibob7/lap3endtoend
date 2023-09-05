const filmReducer = (state = [], action) => {
    switch(action.type) {
        case "addFilm":
            console.log(action.payload)
            action.payload.id = state.length + 1
            return [...state, action.payload]
        case "getFilms":
            return state;
        // case "getGenre":
        //     if(genre === "comedy")
        //     return [...state, action.payload]
        case "populateFilms":
            console.log(action.payload)
            return [...state, action.payload]
        default:
            return state;
    }
}

export default filmReducer