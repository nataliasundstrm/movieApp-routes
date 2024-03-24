import React, { useContext } from 'react'
import Movie from './Movie'
import styled from 'styled-components'
import { FavoritesContext } from '../context/FavoritesContext';

const Movie_list = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  gap: 1rem;

`;

const MovieList = ({ movies, hide }) => {

  const { addToFavorites, handleFavorites, favorites } = useContext(FavoritesContext)

  if (hide) {
    return (
      <div style={{maxHeight: '100%', height: '100vh'}}>
      </div>
    )
  }

  return (
    <Movie_list>
        {movies 
          ? movies.map(movie => <Movie key={movie.imdbID} movie={movie} handleFavorites={handleFavorites} addToFavorites={addToFavorites}/>)
          : favorites.map(favorite => <Movie key={favorite.imdbID} movie={favorite} handleFavorites={handleFavorites} addToFavorites={addToFavorites}/>)
        }
    </Movie_list>
  )
}

export default MovieList
