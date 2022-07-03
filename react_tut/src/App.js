import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const API_URL = 'http://www.omdbapi.com/?apikey=9b9d6a63';

  const searchMoives = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };


  useEffect(()=>{
    searchMoives('Spiderman');
  },[]);

  return (
    <div className="app">
        <h1>Movie</h1>

        <div className='search'>
          <input  placeholder='Search for Movie' value={searchTerm}
          onChange={(e)=>{ setSearchTerm(e.target.value)}}/>
          <img src={SearchIcon} alt="search" onClick={()=> {searchMoives(searchTerm)}}/>
        </div>

        {
          movies?.length > 0 ? 
          (         
          <div className='container'>
            {movies.map((movie)=> (
              <MovieCard movie={movie}></MovieCard>
            ))}
          </div>

          ) :
          (
            <div className='container'>
              <h2>No moive found</h2>
            </div>
          )
        }
 
    </div>
  );
}

export default App;
