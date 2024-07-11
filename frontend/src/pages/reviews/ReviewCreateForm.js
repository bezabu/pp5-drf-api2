import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/MovieCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import axios from "axios";
//import { useGenreData, useSetGenreData } from "../../contexts/GenreDataContext";
import GenreOptions from "../movies/GenreOptions";
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";


function ReviewCreateForm() {
  //useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [reviewData, setReviewData] = useState({
    movie: "",
    content: "",
    rating: "",
  });
  const { content, rating, movie } = reviewData;
  const { movies, setMovies } = useState({ results: [] });
  const [ hasLoaded, setHasLoaded ] = useState(false);
  const [ movieData, setMovieData] = useState({
    results: []
  })
  const history = useHistory();
  const [ query, setQuery ] = useState("");
  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('content', content);
    formData.append('rating', rating);
    formData.append('movie', movie);
    try {
      console.log('attempt review create');
      console.log(content, rating, movie);
      const {data} = await axiosReq.post(`/reviews`, formData);
      console.log(data);
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
  const fetchMovieData = async (query) => {
    try {
      const {data } = await axiosReq.get(`/movies/?search=${query}`);
      setMovieData(data);
    } catch(err){
      console.log(err);
    }
   }
  useEffect(() => {
    const handleMount = async () => {
      try {
        fetchMovieData(query)
        setHasLoaded(true);
        console.log(movieData.results)
      } catch(err){
        console.log(err)
      }
    }
    


     setHasLoaded(false)
    handleMount()
  }, [query])

  return (
    
    <Form onSubmit={handleSubmit}>
        
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            
            {/*movies searcher*/}
            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form.Group className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}
            >
            <Form.Control
            type="text"
            className="mr-sm-2"
            placeholder="search movies"
            value={query}
            onChange={(event) => (setQuery(event.target.value),
            fetchMovieData()
            )}
            />
            </Form.Group>

            <Form.Group>
              <Form.Control as="select" onChange={handleChange} custom >

                {hasLoaded ? (
                  <>
                  {console.log(movieData?.results)}
                  {movieData?.results.length ? (

                    movieData.results.map((mov) => (
                      <>
                      
                      <option key={movieData.results.id} {...mov} value={movieData.results.id}>{movieData.results.title}</option>
                      
                      </>
                    ))

                  ) : (
                    <option disabled>No results</option>
                  )}
                  </>
                ) : (
                  <Container className={appStyles.Content}>
                  <Asset spinner />
                  </Container>
                  )}

              </Form.Control>
            </Form.Group>

            <p>{movie}</p>
            <Form.Group className="">
            <Form.Label className="d-none">Movie</Form.Label>
              <Form.Control
                type="text"
                placeholder="movie"
                name="movie"
                className={styles.Input}
                value={movie}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.movie?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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


            {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <Form.Check inline label='No stars' name="rating" value="0" type={type} id={`inline-${type}-1`} /><br></br>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <Form.Check inline label="One star" name="rating" value="1" type={type} id={`inline-${type}-2`} /><br></br>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <Form.Check inline label="Two stars" name="rating" value="2" type={type} id={`inline-${type}-3`} /><br></br>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <Form.Check inline label="Three stars" name="rating" value="3" type={type} id={`inline-${type}-4`} /><br></br>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <Form.Check inline label="Four stars" name="rating" value="4" type={type} id={`inline-${type}-5`} /><br></br>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <Form.Check inline label="Five stars" name="rating" value="5" type={type} id={`inline-${type}-6`} />
    </div>
  ))}
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
      {/*<GenreOptions />*/}
    </Form>
    
  );
}

export default ReviewCreateForm;