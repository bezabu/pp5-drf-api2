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
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function ReviewEditForm() {

  const [errors, setErrors] = useState({});
    const {id} = useParams();


    //const genreData = useGenreData();
  //const setGenreData = useSetGenreData();

  //const [genreData, setGenreData ] = useState(null);

  const [reviewData, setReviewData] = useState({
    movie: "",
    content: "",
    rating: "",


  });
  const { content, rating, movie } = reviewData;



  const history = useHistory();

    useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/reviews/${id}`)
            const {content, rating, is_owner} = data;
            console.log(data)
            is_owner ? setReviewData({content, rating}) : history.push('/')
        } catch(err) {
            console.log(err)
        }
    }
    console.log(rating)
    handleMount();
  }, [history, id]);


  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRadio = (event) => {
    setReviewData({
        ...reviewData,
        rating: event.target.value,
      });
      console.log(event.target.value)
  }


  


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('content', content);
    formData.append('rating', rating);
    formData.append('movie', id);


    try {
      console.log('attempt review create');
      console.log(content, rating, movie);
      await axiosReq.put(`/reviews/${id}`, formData);
      
      history.push(`/reviews/${id}`)
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
      {/* Add your form fields here */}

    
    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
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
      <Form.Check inline label='No stars' name="rating" value="0" type={type} id={`inline-${type}-1`} defaultChecked={rating === 0 ? true : console.log(rating)} onChange={handleChange}/><br></br>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <Form.Check inline label="One star" name="rating" value="1" type={type} id={`inline-${type}-2`} defaultChecked={rating === 1 ? true : console.log(rating)} onChange={handleChange}/><br></br>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <Form.Check inline label="Two stars" name="rating" value="2" type={type} id={`inline-${type}-3`} defaultChecked={rating === 2 ? true : console.log(rating)} onChange={handleChange}/><br></br>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <Form.Check inline label="Three stars" name="rating" value="3" type={type} id={`inline-${type}-4`} defaultChecked={rating === 3 ? true : console.log(rating)} onChange={handleChange}/><br></br>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <Form.Check inline label="Four stars" name="rating" value="4" type={type} id={`inline-${type}-5`} defaultChecked={rating === 4 ? true : console.log(rating)} onChange={handleChange}/><br></br>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <Form.Check inline label="Five stars" name="rating" value="5" type={type} id={`inline-${type}-6`} defaultChecked={rating === 5 ? true : console.log(rating)} onChange={handleChange}/>
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

export default ReviewEditForm;