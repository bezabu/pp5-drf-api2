import React from 'react'
import { Badge } from 'react-bootstrap'

const GenreButton = ({ id, name, color}) => {
    //console.log(name);
  return (
    <h3>
    <Badge style={{background: `#${color}`, color: 'black'}} >{name}</Badge>
    </h3>
  )
}

export default GenreButton