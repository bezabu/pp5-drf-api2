import React from 'react'
import styles from '../../styles/Movie.module.css'
import { Card, Container, Media } from 'react-bootstrap'
import GenrePicker from './GenrePicker'
import NoResults from "../../assets/no_results_inverted.png"
import appStyles from "../../App.module.css";
import Asset from '../../components/Asset'
import GenreButton from '../../components/GenreButton'
import { Link } from 'react-router-dom/cjs/react-router-dom'


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
    //console.log('GENRE')
    //console.log(genre);
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
        <Link to={`/movies/${id}`}>
        <Card.Img src={image} alt={title} />
        </Link>
        <Card.Text>
            

                {genre.length ? (
                genre.map((gen) => (
                    <>
                    {console.log(gen)}
                    <GenrePicker
                    //filter={gen}
                    filter={`id=${gen}&`}
                    key={gen} {...gen}
                    />
                    
                    </>
                ))
            ) : (
                <Container className={appStyles.Content}>
                <Asset src={NoResults} />
              </Container>
            )}

            {reviews_count} reviews<br></br>
            {director}<br></br>
            {actors}<br></br>
        </Card.Text>
    </Card>
  )
}

export default Movie