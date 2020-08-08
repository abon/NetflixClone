import React, { useState, useEffect } from 'react';
import axios from './axios'

import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        //if [], run once when row loads and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies);

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Row