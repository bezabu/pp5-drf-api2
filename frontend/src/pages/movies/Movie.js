import React from 'react'
import styles from '../../styles/Movie.module.css'
import { Card, Container, Media } from 'react-bootstrap'
import GenrePicker from './GenrePicker'
import NoResults from "../../assets/no_results_inverted.png"
import appStyles from "../../App.module.css";
import Asset from '../../components/Asset'
import GenreButton from '../../components/GenreButton'


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
        <Card.Img src={image} alt={title} />
        <Card.Text>
            

                {genre.length ? (
                genre.map((gen) => (
                    <>
                    {console.log(gen)}
                    <GenrePicker
                    //filter={gen}
                    filter={`genre__id=${gen}&`}
                    key={gen} {...gen}
                    />
                    
                    </>
                ))
            ) : (
                <Container className={appStyles.Content}>
                <Asset src={NoResults} />
              </Container>
            )}



            {genre}<br></br>
            {reviews_count} reviews<br></br>
            {director}<br></br>
            {actors}<br></br>
        </Card.Text>
    </Card>
  )
}

export default Movie