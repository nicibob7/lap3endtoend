import React, {useEffect} from 'react'
import {bindActionCreators} from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { filmActionCreators } from '../redux/action-creators';
import FilmCard from './FilmCard';

const FilmList = () => {
    const dispatch = useDispatch();
    const {getFilms} = bindActionCreators(filmActionCreators, dispatch)
    const films = useSelector((store) => store.filmReducer);

    //get all the films from store

    useEffect(() => {
        getFilms()
    }, [])
    
    console.log("films: ", films);
    return (
        <>
        <div>FilmList</div>
        {films.map((film) => (
            <FilmCard key={film.id} film={film} />
        ))}
        </>
    )
    //maps the film and puts each film in a filmcard component
}

export default FilmList