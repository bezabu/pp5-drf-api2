
import React, { useEffect, useState } from 'react'
import appStyles from "../../App.module.css";
import styles from "../../styles/ReviewsPage.module.css";
import { Col, Container, Form, Row } from 'react-bootstrap';
import Movie from './Movie';
import Asset from '../../components/Asset';
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no_results_inverted.png"
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from '../../utils/utils';

const MoviesPage = ({ message, filter=""}) => {
    const [movies, setMovies ] = useState({ results: [] });
    const [ hasLoaded, setHasLoaded ] = useState(false);
    const { pathname } = useLocation();

    const [ query, setQuery ] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const {data} = await axiosReq.get(`/movies/?${filter}search=${query}`);
                setMovies(data);
                setHasLoaded(true);
            } catch(err){
                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchMovies();
        }, 600)
        return () => {
            clearTimeout(timer)
        }
        
    }, [filter, query, pathname]);
  return (
    <Row  className={`${styles.MoviesContainer} d-flex`}>
        <Col>

        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form className={styles.SearchBar}
        onSubmit={(event) => event.preventDefault()}
        >
        <Form.Control
        type="text"
        className="mr-sm-2"
        placeholder="search movies"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        />
        </Form>

        <Row className={styles.MoviesContainer}>
        {hasLoaded ? (
            <>
            {movies.results.length ? (
                //has length
                <InfiniteScroll
                    children={
                        movies.results.map((movie) => (
                            <>
                            <Movie key={movie.id} {...movie} setMovies={setMovies} className={`${styles.MoviesContainer}`} />
                            {console.log(movie)}
                            </>
                        ))
                    }
                    dataLength={movies.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!movies.next}
                    next={() => fetchMoreData(movies, setMovies)}
                />
                
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
        </Row>
        </Col>
    </Row>
  )
}

export default MoviesPage