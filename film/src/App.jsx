import './App.css';
import React, { useEffect } from 'react'
import FilmForm from './components/FilmForm';
import FilmList from './components/FilmList';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { filmActionCreators } from './redux/action-creators'; // Import the addFilm action creator



function App() {

  const dispatch = useDispatch();
  const {populateFilms} = bindActionCreators(filmActionCreators, dispatch)

const fetchFilm = async () => {
  const fetchedItems = await fetch("http://127.0.0.1:3000/films")
  const item = await fetchedItems.json()
  populateFilms(item)
  console.log(item)
}

  useEffect(() => {
    fetchFilm()
}, [])

  return (
    <div className="App">
      <h1>Films
      </h1>
      <FilmForm/>
      <FilmList />
    </div>
  );
}

export default App;
