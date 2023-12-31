import logo from './logo.svg';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import { useEffect, useState } from 'react';



function App() {
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY

  const [movie, setMovie] = useState(null)


  const getMovie = async (searchTerm) => {
    try {
      
        const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
        const data = await res.json()
        console.log(data);
        setMovie(data)
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getMovie('heat')}
  ,[])

  return (
    <div className="bg-slate-600 flex flex-col justify-center items-center">
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
