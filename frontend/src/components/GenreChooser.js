import React, { useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap';
import GenreButtonCheck from '../components/GenreButtonCheck';
import Asset from "../components/Asset";
import NoResults from "../assets/no_results_inverted.png"



import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { axiosReq } from '../api/axiosDefaults';

function GenrePicker({ genreKey, setGenreKey, message, filter = ""}) {
    const [genres, setGenres ] = useState({ results: [] });
    const [ hasLoaded, setHasLoaded ] = useState(false);
    const { pathname } = useLocation();
    //console.log('FILTER:')
    //console.log(filter);
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const {data} = await axiosReq.get(`/genres`);
                //console.log(data);
                setGenres(data);
                setHasLoaded(true);
            } catch(err){
                console.log(err);
            }
            //console.log('GENRES:')
            //console.log(genres);
        };

        setHasLoaded(false);
        fetchGenres();
        
    }, [filter, pathname]);
  return (
    <Row>
        <Col>
        {hasLoaded ? (
            //has loaded
            <>
            {genres.results.length ? (
                //has length
                genres.results.map((genre) => (
                    <>
                    <GenreButtonCheck key={genre} {...genre} id={genre.id} color={genre.color} name={genre.name} setGenres={setGenres} />

                    </>
                ))
            ) : (
                //no length
                <Container>
                    <Asset src={NoResults}/>
                </Container>
                
            )}
            </>
        ) : (
            //has not loaded
            <Container>
                <Asset spinner />
            </Container>
        )}
        </Col>
    </Row>
  )
}

export default GenrePicker