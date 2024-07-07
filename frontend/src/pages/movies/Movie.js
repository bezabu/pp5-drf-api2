import React from 'react'
import styles from '../../styles/Movie.module.css'
import { Card, Media } from 'react-bootstrap'
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
        moviePage,
    } = props
  return (
    <Card className={styles.Movie}>
        <Card.Body>
            <Media className="align--items-center justify-content-between">
<div className="d-flex align-items-center">
    {is_curator && moviePage && "..."}
</div>
            </Media>
        </Card.Body>
        <Card.Body>
            {title && <Card.Title className='text-center'>{title} - {year}</Card.Title>}
        </Card.Body>
        <Card.Img src={image} alt={title} />
        <Card.Text>
            {genre}<br></br>
            {reviews_count} reviews<br></br>
            {director}<br></br>
            {actors}<br></br>
        </Card.Text>
    </Card>
  )
}

export default Movie