import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import Movie from "./Movie";
import MoviePageMovie from "./MoviePageMovie"

function MoviePage() {

  const { id } = useParams();
  const [ movie, setMovie ] = useState({ results: [] });
  //console.log('id');
  //console.log(id);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: movie }] = await Promise.all([
          axiosReq.get(`/movies/${id}`)
        ])
        //const [{data: movie }] = await axiosReq.get(`/movies/${id}`);
        setMovie({ results: [movie] })
        console.log('one');
        console.log(movie)
        //console.log(data)
      } catch(err){
        console.log(err)
      }
      //console.log('two');
      //console.log(movie);
    }

    handleMount()
    
  }, [id]);
  //console.log('three');
  //console.log(movie);
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <p>Popular profiles for mobile</p>


        
          <MoviePageMovie {...movie.results[0]} genre={movie.genre} setMovies={setMovie} moviePage />
        
        
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default MoviePage;