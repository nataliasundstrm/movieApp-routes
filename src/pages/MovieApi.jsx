
// För att installera REACT:
// - 1. Skapa en mapp 
// - 2. npm create vite@latest

// Starta REACT: 
// - npm run dev 

// Installera node 
// - npm install 

import React, { useContext, useEffect, useState } from 'react'
import MovieList from '../components/MovieList'
import Form from '../components/Form'
import { FavoritesContext } from '../context/FavoritesContext'

const MovieAPI = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('barbie')
  const [category, setCategory] = useState('')
  const [error, setError] = useState({ show: 'false', message: '' })
  const [hide, setHide] = useState(true)

  const {addToFavorites, handleFavorites} = useContext(FavoritesContext)

  const fetchMovies = async (search, category) => {

    // Get API (data)
    let API_URL = `https://www.omdbapi.com/?apikey=d34fb9a1&s=${search}`

    if (category) {
      API_URL = `https://www.omdbapi.com/?apikey=d34fb9a1&s=${search}&type=${category}`

    }

    const response = await fetch(API_URL)
    const data = await response.json()

    // If search value exist, display movies, series and games etc. 
    if (data.Response === 'True') {
      setMovies(data.Search)
      setError({ show: 'false', message: '' })
      setHide(false)

    } else {
      setError({ show: 'true', message: data.Error })
      setHide(true)
    }

  }

  // "Runs" the API with movies
  useEffect(() => {
    let setTime = setTimeout(() => {
      fetchMovies(search, category)
    }, 500)

    return () => clearTimeout(setTime)

  }, [search, category])

  return (
    <>
      <Form
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        error={error}
      />

      <MovieList
        hide={hide}
        movies={movies}
        addToFavorites={addToFavorites}
        handleFavorites={handleFavorites}
      />
    </>
  )
}


export default MovieAPI
