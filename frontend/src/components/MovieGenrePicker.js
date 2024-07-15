import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { axiosReq } from '../api/axiosDefaults';

function MovieGenrePicker() {
    const [selectedGenre, setSelectedGenre] = useState(); 
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
    }, [pathname]);
  return (
    <>
    {selectedGenre}
    <select
      value={selectedGenre} 
      onChange={e => {
        setSelectedGenre(e.target.value)
    }} 
    >
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
    </select>
    </>
  )
}

export default MovieGenrePicker