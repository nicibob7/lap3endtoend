// FilmForm.jsx
import { bindActionCreators } from 'redux';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filmActionCreators } from '../redux/action-creators'; // Import the addFilm action creator

const  FilmForm = () => {
  const dispatch = useDispatch();
  const {addFilm} = bindActionCreators(filmActionCreators, dispatch)

  const [filmData, setFilmData] = useState({
    title: '',
    genre: '',
  });

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name, value)
    setFilmData({ ...filmData, [name]: value });
  };

  const handleGenreChange = (e) => {
    const { name, value } = e.target;
    console.log("genre", name, value)
    setFilmData({ ...filmData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitFilmData", filmData)

    // Dispatch the addFilm action with the filmData
    addFilm(filmData);
    // Clear the form fields
    setFilmData({ name: '',  genre: '' });
  };
  return (
    <>
      <h2>Add a Film</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="name"
            value={filmData.name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={filmData.genre}
            onChange={handleGenreChange}
          />
        </label>
        <br />
        <button type="submit">Add Film</button>
      </form>
    </>
  );
}

export default FilmForm;
