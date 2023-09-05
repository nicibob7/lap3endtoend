import React from 'react'

const FilmCard = ({ film }) => {
  return (
    
    <div>
        <h2>{film.name}</h2>
        <h3>{film.genre}</h3>
    </div>
  )
}

export default FilmCard