import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import GenreButton from '../../components/GenreButton';
import Asset from "../../components/Asset";
import NoResults from "../../assets/no_results_inverted.png"

import { useLocation } from 'react-router-dom/cjs/react-router-dom';

function GenrePicker({ filter = ""}) {
    const [genres, setGenres ] = useState({ results: [] });
    const [ hasLoaded, setHasLoaded ] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const {data} = await axiosReq.get(`/genres/?${filter}`);

                setGenres(data);
                setHasLoaded(true);
            } catch(err){
                console.log(err);
            }
        };
        setHasLoaded(false);
        fetchGenres();
    }, [filter, pathname]);
  return (
    <Row>
        <Col>
        {hasLoaded ? (
            <>
            {genres.results.length ? (
                genres.results.map((genre) => (
                    <>
                    <GenreButton key={genre} {...genre} color={genre.color} name={genre.name} setGenres={setGenres} />

                    </>
                ))
            ) : (
                <Container>
                    <Asset src={NoResults}/>
                </Container>
            )}
            </>
        ) : (
            <Container>
                <Asset spinner />
            </Container>
        )}
        </Col>
    </Row>
  )
}

export default GenrePicker