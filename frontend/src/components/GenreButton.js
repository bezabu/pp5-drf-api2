import React from 'react'
import { Badge } from 'react-bootstrap'

const GenreButton = ({ id, name, color}) => {
    //console.log(name);
  return (
    
    <Badge style={{background: `#${color}`, color: 'black', 'font-size': '125%', 'margin': '5px'}} >{name}</Badge>
    
  )
}

export default GenreButton