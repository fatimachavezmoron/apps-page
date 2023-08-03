import './AboutScreen.css'
import { useState } from 'react'

export const AboutScreen = () => {

  const urlBase = 'https://api.themoviedb.org/3/search/movie'
  const API_KEY = 'f658583151f05bcb5e43564db31888a5'

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchMovies()
  }

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}`)
      const data = await response.json()
  
      // Verificar si 'results' está presente en 'data' y es un arreglo
      if (data.results && Array.isArray(data.results)) {
        setMovies(data.results)
      } else {
        console.error('Invalid data format: data.results is not an array')
      }
    } catch (error) {
      console.error('An error has occurred:', error)
    }
  }
  

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
    <div style={{display:'flex', 
                flexDirection:'column', 
                ustifyContent:'center', 
                alignItems:'center',
                marginTop: '20px'}}>
      <h1 className='titlemovies'>Search the Movie</h1>
      <form onSubmit={handleSubmit} className='formMovies'>
        <div>
        <input
          type='text'
          placeholder='Enter movie name'
          value={search}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='search-button'
        >
          Search
        </button>
        </div>
      </form>

      <div className='movieList'>
        {movies.map((movie) => (
          <div key={movie.id} className='movieCard'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>

    </div>
   </>
  )
}
