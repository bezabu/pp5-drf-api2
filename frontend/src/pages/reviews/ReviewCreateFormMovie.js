import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/MovieCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function ReviewCreateFormMovie() {
  useRedirect("loggedOut")
  const { movie } = useParams();
  const [errors, setErrors] = useState({});

  const [reviewData, setReviewData] = useState({
    movie: "",
    content: "",
    rating: "",
  });
  const { content, rating, } = reviewData;

  const [ movieData, setMovieData] = useState({
    id: "",
    title: "",
    year: "",
    genre: "",
    director: "",
    actors: "",
    reviews_count: "",
    image: "",
  })

  const history = useHistory();
  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {

    const fetchMovieData = async () => {
      try {
        const {data } = await axiosReq.get(`/movies/${movie}`)
        setMovieData(data)
      } catch(err){
        console.log(err)
      }
     }
    const handleMount = async () => {
      fetchMovieData();
    }
    handleMount()
  }, [movie, movieData])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('movie', movie);
    formData.append('content', content);
    formData.append('rating', rating);
    try {
      const {data} = await axiosReq.post('/reviews/', formData);
      history.push(`/reviews/${data.id}`)
    } catch(err) {
      console.log(err)
      if (err.response?.status !== 401){
        console.log(err.response?.data);
        setErrors(err.response?.data);
      }
    }
  }

  const textFields = (
    <div className="text-center">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            {movieData.title} - {movieData.year}
            <img src={movieData.image} alt={movieData.title}/>
            <Form.Group className="">
            <Form.Label className="d-none">Content</Form.Label>
              <Form.Control
                type="text"
                placeholder="content"
                name="content"
                className={styles.Input}
                value={content}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

            { 
    <div key={`inline-radio`} className="mb-3">
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <Form.Check inline label='No stars' name="rating" value={0} type={'radio'} id={`inline-radio-1`} onChange={handleChange} /><br></br>
      <i className="fa-solid fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <Form.Check inline label="One star" name="rating" value={1} type={'radio'} id={`inline-radio-2`} onChange={handleChange} /><br></br>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <Form.Check inline label="Two stars" name="rating" value={2} type={'radio'} id={`inline-radio-3`} onChange={handleChange} /><br></br>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <Form.Check inline label="Three stars" name="rating" value={3} type={'radio'} id={`inline-radio-4`} onChange={handleChange} /><br></br>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <Form.Check inline label="Four stars" name="rating" value={4} type={'radio'} id={`inline-radio}-5`} onChange={handleChange} /><br></br>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <Form.Check inline label="Five stars" name="rating" value={5} type={'radio'} id={`inline-${'radio'}-6`} onChange={handleChange} />
    </div>
  }
       {errors?.rating?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}     
   
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
    
  );
}

export default ReviewCreateFormMovie;