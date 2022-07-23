import React, { useState,useEffect } from 'react'
import axios from "../api/axios";
import requests from "../api/requests";
import "./Banner.css";


const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
      fetchData();
       
    }, [])
    
    const fetchData = async () =>{
        const request = await axios.get(requests.fetchNowPlaying);

        console.log(request);
        //현재 상영중인 영화중 랜덤으로 ID하나 가져오기
        const movieId = request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;

        const {data: movieDetail} = await axios.get(`movie/${movieId}`,{
            params : { append_to_response: "videos, images"},
        });
        setMovie(movieDetail);
        console.log(movieDetail);
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "...." : str;
    }

  return (
    <header
        className='banner'
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
        }}
    >

        <div className="banner__contents">

            <h1 className='banner__title'>
                {movie?.title || movie?.name ||movie?.original_name}
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button play'>Play</button>
                <button className='banner__button info'>
                    <div className='space'>More Information</div>
                </button>
            </div>

            <h1 className='banner__description'>
                {truncate(movie?.overview, 100)}
            </h1>

        </div>
        <div className='banner--fadeBottom'></div>
    </header>
  )
}

export default Banner