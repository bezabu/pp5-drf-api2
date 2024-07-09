import React from 'react'
import { Badge, Form } from 'react-bootstrap'
import handleChange from "../pages/movies/MovieCreateForm"

const GenreButton = ({ id, name, color}) => {
    //console.log(name);
    const buttonLabel = <>
      <Badge style={{background: `#${color}`, color: 'black', fontSize: '125%', 'margin': '5px'}}>{name}</Badge>
    </>
  return (
          <>
            {console.log(id)}
            <Form.Check
            id={id}
            value={id}
            label={buttonLabel}
            style={{'margin-top': '5px', 'margin-bottom': '5px'}}
            inline
            />
            </>
  )
}

export default GenreButton