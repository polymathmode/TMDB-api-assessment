import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


interface Movies {
  id:number,
  title:string,
  poster_path:string,
  release_date:string
}

function App() {
  const [movies,setMovies]=useState<Movies[]>([])
  const apiKey="88c17b98911fd465b3611e2eb080dfb7"
  const popular="https://api.themoviedb.org/3/movie/popular"


  useEffect(()=>{
   fetchData()
  },[])

  const fetchData=()=>{
    axios.get(`${popular}?api_key=${apiKey}`)
    .then((response)=>{
      const result=response.data.results
      console.log(result);
      setMovies(result)
      
    })
  }
 
  

  return (
    <div className="App">
      {movies.map((item)=>(
        <div className='movie-container' key={item.id}>
     <h2>{item.title}</h2>
     {item.poster_path && (
      <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.title} Poster`}/>
     )}
     <p>{item.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
