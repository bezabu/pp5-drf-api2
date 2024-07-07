import React from 'react'
import styles from '../../styles/Movie.module.css'
const Movie = (props) => {
    const {
        id,
        title,
        year,
        genre,
        director,
        actors,
        reviews_count,
        image,
        is_curator,
    } = props
  return (
    <div>Movie placeholder text</div>
  )
}

export default Movie