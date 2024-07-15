import React, { useEffect, useState } from 'react'

import { Col, Row } from 'react-bootstrap';
//import GenreButtonCheck from '../components/GenreButtonCheck';
//import Asset from "../components/Asset";
//import NoResults from "../assets/no_results_inverted.png"



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
            //has loaded
            <>
            
            {genres.results.length ? (
                //has length
                
                genres.results.map((genre) => (
                    <>
                    {/*}
                    <GenreButtonCheck key={genre} {...genre} id={genre.id} color={genre.color} name={genre.name} setGenres={setGenres} handleGenre={handleGenre}  movieData={movieData} setMovieData={setMovieData} />
                    */}
                    
                    <option key={genre.id} {...genre} value={genre.id}>{genre.name}</option>
                    
                    
                    </>
                ))
            ) : (
                //no length
                null
                
            )}
            
            </>
        ) : (
            //has not loaded
            null
        )}
        </Col>
    </Row>
  )
}

export default GenreChooser