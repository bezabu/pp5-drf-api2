import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//import Container from "react-bootstrap/Container";

//import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom";
//import Movie from "./Movie";
import MoviePageMovie from "./MoviePageMovie"
import PopularProfiles from "../profiles/PopularProfiles";

function MoviePage() {

  const { id } = useParams();
  const [ movie, setMovie ] = useState({ results: [] });


  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: movie }] = await Promise.all([
          axiosReq.get(`/movies/${id}`)
        ])
        //const [{data: movie }] = await axiosReq.get(`/movies/${id}`);
        setMovie({ results: [movie] })

      } catch(err){
        console.log(err)
      }

    }

    handleMount()
    
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <PopularProfiles mobile />


        
          <MoviePageMovie {...movie.results[0]} setMovies={setMovie} moviePage />
        
        
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      <PopularProfiles />
      </Col>
    </Row>
  );
}

export default MoviePage;