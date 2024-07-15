

//import { Form } from "react-bootstrap";
import { useGenreData } from "../../contexts/GenreDataContext";


import React from 'react'

const GenreOptions = () => {
    const genreData = useGenreData();
  //const setGenreData = useSetGenreData();



    const optionId = []
    const genreId = []
    const genreName = []
    const genreColor = []

    for (var i=0; i < genreData.length; i++ ){

        optionId.push(Object.keys(genreData)[i])
        
            var foo = Object.values(genreData)[i];

            //id

            genreId.push(Object.values(foo)[0])
            //name

            genreName.push(Object.values(foo)[1])
            //color
 
            genreColor.push(Object.values(foo)[2])


        
        
    }
  


  return (
    
    
    genreName.map((n) => (
        <p key={n+1}>{genreName[n]}</p>
    ))
    
      
  )
}

export default GenreOptions