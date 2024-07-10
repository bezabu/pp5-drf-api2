import React, { useState } from 'react'
import styles from '../../styles/Movie.module.css'
import { Card, Container, Media } from 'react-bootstrap'
import GenrePicker from './GenrePicker'
import NoResults from "../../assets/no_results_inverted.png"
import appStyles from "../../App.module.css";
import Asset from '../../components/Asset'
import GenreButton from '../../components/GenreButton'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { axiosReq } from '../../api/axiosDefaults'


function MoviePageMovie(props) {
    const { id } = useParams();
    const {
        title,
        genre,
        year,
        director,
        actors,
        reviews_count,
        reviews_avg,
        image,
        is_curator,
        moviePage,
        setMovies,
    } = props
    //console.log('GENRE')
    //console.log(genre);

    const currentUser = useCurrentUser();
    
    const [genres, setGenres ] = useState({ results: [] });

    const fetchMovieGenres = async () => {
    const { data } = await Promise.all([
        axiosReq.get(`/movies/${id}`)
      ])
      console.log(data)
}
    


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
            {genre}
            {genre?.length ? (
                genre.map((gen) => (
                    <>
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
            
            
            Average rating: {reviews_avg} (<Link to={`/reviewsm/${id}`}> {reviews_count} reviews</Link> )
            {director}<br></br>
            {actors}<br></br>
            {currentUser &&
            <Link to={`/reviews/m/${id}`}>Write your own review!</Link>
}
        </Card.Text>
    </Card>
  )
}

export default MoviePageMovie