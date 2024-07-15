import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { axiosReq } from '../api/axiosDefaults';

function GenreChooser({ genreKey, setGenreKey, message, filter = ""}, handleGenre, movieData, setMovieData) {
    const [genres, setGenres ] = useState({ results: [] });
    const [ hasLoaded, setHasLoaded ] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const {data} = await axiosReq.get(`/genres`);
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
                    <option key={genre.id} {...genre} value={genre.id}>{genre.name}</option>
                    </>
                ))
            ) : (
                null 
            )}
            </>
        ) : (
            null
        )}
        </Col>
    </Row>
  )
}

export default GenreChooser