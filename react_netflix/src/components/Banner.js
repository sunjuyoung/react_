import React, { useState,useEffect } from 'react'
import axios from "../api/axios";
import requests from "../api/requests";


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

  return (
    <div>Banner</div>
  )
}

export default Banner