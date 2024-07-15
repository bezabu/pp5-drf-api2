import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { axiosReq } from '../api/axiosDefaults';

function MovieGenrePicker() {
    const [selectedGenre, setSelectedGenre] = useState(); // Declare a state variable...
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
      value={selectedGenre} // ...force the select's value to match the state variable...
      onChange={e => {
        setSelectedGenre(e.target.value)

    }} // ... and update the state variable on any change!
    >
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
    </select>
    </>
  )
}

export default MovieGenrePicker