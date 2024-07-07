import React from 'react'
import styles from '../../styles/Review.module.css'
import { Card, Media } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import Avatar from '../../components/Avatar'
const Review = (props) => {
    const {
        id,
        owner,
        movie,
        movie_title,
        movie_image,
        created_at,
        updated_at,
        content,
        rating,
        is_owner,
        profile_id,
        profile_image,
        like_id,
        likes_count,
        comments_count,
        likes_heart_count,
        likes_smile_count,
        likes_thumb_count,
        likes_laugh_count,
        likes_applaud_count,
        reviewPage
    } = props
  return (
    <Card className={styles.Review}>
        <Card.Body>
            <Media className="align--items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
<div className="d-flex align-items-center">
    {is_owner && reviewPage && "..."}
</div>
            </Media>
        </Card.Body>
        <Card.Body>
            {movie_title && <Card.Title className='text-center'><Link to={`/movies/${movie}`}>{movie_title}</Link></Card.Title>}
        </Card.Body>
        <Card.Img src={movie_image} alt={movie_title} />
        <Card.Text>
            {content}<br></br>
            {rating} stars

        </Card.Text>
    </Card>
  )
}

export default Review