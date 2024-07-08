
import React, { useEffect, useState } from 'react'
import appStyles from "../../App.module.css";
import { Col, Container, Row } from 'react-bootstrap';
import Movie from './Movie';
import Asset from '../../components/Asset';
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no_results_inverted.png"

const MoviesPage = ({ message, filter=""}) => {
    const [movies, setMovies ] = useState({ results: [] });
    const [ hasLoaded, setHasLoaded ] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const {data} = await axiosReq.get(`/movies/?${filter}`);
                setMovies(data);
                setHasLoaded(true);
            } catch(err){
                console.log(err);
            }
        };

        setHasLoaded(false);
        fetchMovies();
    }, [filter, pathname]);
  return (
    <Row>
        <Col>
        {hasLoaded ? (
            <>
            {movies.results.length ? (
                //has length
                movies.results.map((movie) => (
                    <Movie key={movie.id} {...movie} setMovies={setMovies}/>
                ))
            ) : (
                //no length
                <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
            </>
        ) : (
            //loading
            <Container className={appStyles.Content}>
            <Asset spinner />
            </Container>
        )}
        </Col>
    </Row>
  )
}

export default MoviesPage