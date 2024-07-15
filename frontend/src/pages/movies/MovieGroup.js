import React from 'react'
import Movie from './Movie'

const MovieGroup = (props) => {
    const {
        id,
        title,
        year,
        genre,
        director,
        actors,
        reviews_count,
        reviews_avg,
        image,
        is_curator,
        moviePage,
        setMovies,
    } = props
  return (
    
        <>
        {movies.results.map((movie) => (
                            <>
                            <Movie key={movie.id} {...movie} setMovies={setMovies} />

                            </>
                        ))}
                    
                    </>
                    
  )
  
}

export default MovieGroup