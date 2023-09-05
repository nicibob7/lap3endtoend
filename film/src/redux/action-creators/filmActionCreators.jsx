// Action creators
export const addFilm = (filmData) => {
    return (dispatch) => {
        dispatch({
        type: 'addFilm',
        payload: filmData
    })
    }
}

export const getFilms = () => {
    return (dispatch) => {
        // You can fetch the films from an API or other data source here
        // For now, let's assume you have a static list of films
        /*
        const films = [
            {
                name: "Film 1",
                genre: "Action",
            },
            {
                name: "Film 2",
                genre: "Comedy",
            },
            // Add more films here
        ];*/

        dispatch({
            type: 'getFilms',
        });
        
    };
};

export const populateFilms = (filmData) => {
    return (dispatch) => {
        dispatch({
            type: 'populateFilms',
            payload: filmData
        })
    }
}