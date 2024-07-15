import React from 'react'
import Badge from 'react-bootstrap/Badge'

const GenreButton = ({ id, name, color}) => {

  return (
    
    <Badge style={{background: `#${color}`, color: 'black', fontSize: '125%', 'margin': '5px'}} 
    >{name}</Badge>
    
  )
}

export default GenreButton