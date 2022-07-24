import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import axios from "../api/axios";
import requests from "../api/requests";
import "./Banner.css";



const Banner = () => {
    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
      fetchData();
       
    }, [])
    
    const fetchData = async () =>{
        const request = await axios.get(requests.fetchNowPlaying);

        //현재 상영중인 영화중 랜덤으로 ID하나 가져오기
        const movieId = request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;

        const {data: movieDetail} = await axios.get(`movie/${movieId}`,{
            params : { append_to_response: "videos"},
        });
        setMovie(movieDetail);
    }

    //100자 이상 ...
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "...." : str;
    }
    console.log('movie',movie);
    if(!isClicked){
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
                        <button className='banner__button play' onClick={()=> setIsClicked(true)}>Play</button>
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
    }else{
        return (
            <Container>
              <HomeContainer>
                <Iframe
                  width="640"
                  height="360"
                  src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></Iframe>
              </HomeContainer>
            </Container>
          );
    }

}
//inline frame의 약자
//다른 html 페이지를 현재 페이지에 포함시키는 중첩된 브라우저로
//youtube영상을 가져와서 삽입
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;




export default Banner