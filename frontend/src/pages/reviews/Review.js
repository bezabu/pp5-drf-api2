import React from 'react'
import styles from '../../styles/Review.module.css'
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom'
import Avatar from '../../components/Avatar'
import { axiosRes } from '../../api/axiosDefaults';
import { MoreDropdown } from '../../components/MoreDropdown';
const Review = (props) => {
    const {
        id,
        owner,
        movie,
        movie_title,
        movie_image,
        content,
        rating,
        is_owner,
        profile_id,
        profile_image,
        like_id,
        likes_count,
        comments_count,
        reviewPage,
        setReviews,
    } = props

    const currentUser = useCurrentUser();
    const history = useHistory();
    const handleEdit = () => {
        history.push(`/reviews/${id}/edit`);
      };
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/reviews/${id}`);
          history.goBack();
        } catch (err) {
          console.log(err);
        }
      };

    const handleLikeHeart = async () => {
        try {
            const {data} = await axiosRes.post('/likes/', {review:id});
            setReviews((prevReviews) => ({
                ...prevReviews,
                results: prevReviews.results.map((review)=> {
                    return review.id === id
                    ? {...review, likes_count: review.likes_count +1, like_id: data.id}
                    : review;
                })
            }));
        } catch(err){
            console.lof(err);
        }
    };

    const handleUnlikeHeart = async () => {
        try {
          await axiosRes.delete(`/likes/${like_id}/`);
          setReviews((prevReviews) => ({
            ...prevReviews,
            results: prevReviews.results.map((review) => {
              return review.id === id
                ? ({ ...review, likes_count: review.likes_count - 1, like_id: null }
                )
                : review;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };

      const stars = []
      const ratingStars = (rating) => {
        for (let i = 0; i < rating; i++) {
          stars.push(<i key={i} className="fa-solid fa-star"></i>);
      }
      for (let i = rating; i < 5; i++) {
        stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
      return stars;
    };
  return (
<>
<Row className={`${styles.ReviewContainer} d-flex align--items-center `} >
    <Row className={`${styles.ReviewMedia} align--items-center justify-content-between`}>
      <Col className={`${styles.ImageContainer}`} xs={12} sm={4} fluid="true">
      <Link to={`/movies/${movie}`}>
      <img className={styles.MovieImage} src={movie_image} alt={movie_title}/>
      </Link>
      </Col>
      <Col className={`${styles.ReviewContainerCol}`} xs={12} sm={8}>
      <Row className={`${styles.ReviewContainerRow} justify-content-between`}>
        <Col className={`${styles.ProfileContainer} align--items-left`} >
        <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
        </Col>
        <Col className={`${styles.Title}`} fluid="true">
        {movie_title && <Card.Title className='text-center'>{movie_title}</Card.Title>}
        </Col>
        <Col className={`${styles.DropDownContainer} align--items-right`}>
        {is_owner && reviewPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
        </Col>
      </Row>
      <Row className={styles.ContentContainer}>
      {content}
      </Row>
      <Row className={`${styles.BottomRow} align--items-center justify-content-between mt-auto`}>
        <Col>
      <p className={styles.ReviewStars}>
            {ratingStars(rating)}
            </p>
            </Col>
            <Col>
            {is_owner ? (
                <OverlayTrigger placement="top" overlay={<Tooltip>You can't like your own review!</Tooltip>}>
                    <i className="fa-regular fa-heart"></i>
                </OverlayTrigger>
            ) : like_id ? (
                <span onClick={handleUnlikeHeart}><i className={`fa-regular fa-heart ${styles.Heart}`}></i></span>
            ) : currentUser ? (
                <span onClick={handleLikeHeart}>
                    <i className={`fa-regular fa-heart ${styles.HeartOutline}`}></i>
                </span>
            ) : (
                <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like reviews</Tooltip>}>
                    <i className="fa-regular fa-heart"></i>
                </OverlayTrigger>
            )}
            {likes_count}
            </Col>
            <Col>
            <Link to={`/reviews/${id}`}>
            <i className="fa-regular fa-comment"></i>
            </Link>
            {comments_count}
            </Col>
      </Row>
      </Col>
    </Row>
</Row>

    </>
  )
}

export default Review