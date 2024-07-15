import React from 'react'
import { Badge, Form } from 'react-bootstrap'
import handleChange from "../pages/movies/MovieCreateForm"

const GenreButton = ({ id, name, color}, handleGenre, movieData, setMovieData) => {
    //console.log(name);
    const buttonLabel = <>
      <Badge style={{background: `#${color}`, color: 'black', fontSize: '125%', 'margin': '5px'}}>{name}</Badge>
    </>


const handleGenree = (event) => {
  if (movieData.genre.includes(event.target.value)){
    //already checked
  } else {
    //not already checked
    var genre = genre.push(event.target.value)

  }
    
  
}
  return (
          <>
            
            <Form.Check
            id={id}
            value={id}
            label={buttonLabel}
            style={{'margin-top': '5px', 'margin-bottom': '5px'}}
            onChange={handleGenre}
            inline
            />
            </>
  )
}

export default GenreButton