

import { Form } from "react-bootstrap";
import { useGenreData, useSetGenreData } from "../../contexts/GenreDataContext";


import React from 'react'

const GenreOptions = () => {
    const genreData = useGenreData();
  const setGenreData = useSetGenreData();

    //console.log(genreData);

    const optionId = []
    const genreId = []
    const genreName = []
    const genreColor = []

    for (var i=0; i < genreData.length; i++ ){
        //console.log(Object.keys(genreData)[i])
        optionId.push(Object.keys(genreData)[i])
        
            var foo = Object.values(genreData)[i];
            //console.log(Object.keys(foo)[1])
            //id
            //console.log(Object.values(foo)[0])
            genreId.push(Object.values(foo)[0])
            //name
            //console.log(Object.values(foo)[1])
            genreName.push(Object.values(foo)[1])
            //color
            //console.log(Object.values(foo)[2])
            genreColor.push(Object.values(foo)[2])


        
        
    }
  
    //console.log(optionId)
    console.log(genreId)
    console.log(genreName)
    //console.log(genreColor)

  return (
    
    
    genreName.map((n) => (
        <p key={n+1}>{genreName[n]}</p>
    ))
    
      
  )
}

export default GenreOptions