import React from 'react'
import styles from '../../styles/Movie.module.css'
import { Card, Col, Container, Media, Row } from 'react-bootstrap'
import GenrePicker from './GenrePicker'
import NoResults from "../../assets/no_results_inverted.png"
import appStyles from "../../App.module.css";
import Asset from '../../components/Asset'
import GenreButton from '../../components/GenreButton'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useCurrentUser } from '../../contexts/CurrentUserContext'


const Movie = (props) => {
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



    const currentUser = useCurrentUser();

  return (
    <>
        <Col className={`${styles.MovieContainer}`} xs={12} sm={6} md={3}>
        <Row className={`${styles.InnerMovieContainer}`}>
            <Col>
            

        <Row className={`${styles.MovieTitleContainer} align--items-center justify-content-between`}>
        {title && <h2 className={`${styles.MovieTitle} text-center`}>{title} - ({year})</h2>}
        </Row>
        <Row className={styles.MovieImageContainer}>
        <Link to={`/movies/${id}`}>
        <Card.Img src={image} alt={title} className={styles.MovieImage}/>
        </Link>
        </Row>
        {/*}
        <Row>
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
        </Row>
        */}
        <Row className={`${styles.MovieTextContainer}`}>
            
        Average rating: {reviews_avg} (<Link to={`/reviewsm/${id}`}> {reviews_count} reviews</Link> )<br></br>
        </Row>
        <Row>   
            Dir: {director}<br></br>
            </Row>
        <Row className={`${styles.Truncate} ${styles.Actors}`}>
            {actors}<br></br>
            </Row>
            <Row className={`align--items-center justify-content-between`}>
            {currentUser &&
            <Link to={`/reviews/m/${id}`}>Write your own review!</Link>
            }
            
        </Row>

        </Col>
        </Row>
        </Col>
        
            
        
        
        

                

            
</> 
  )
}

export default Movie