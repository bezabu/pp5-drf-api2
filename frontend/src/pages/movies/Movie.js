import React from 'react'
import styles from '../../styles/Movie.module.css'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useCurrentUser } from '../../contexts/CurrentUserContext'


const Movie = (props) => {
    const {
        id,
        title,
        year,
        director,
        actors,
        reviews_count,
        reviews_avg,
        image,
    } = props



    const currentUser = useCurrentUser();

  return (
    
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
        
            
        
        
        

                

            
 
  )
}

export default Movie