import React from 'react'
import Movie from './Movie'
import styled from 'styled-components'

const Movies__list = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const MovieList = ({movies, hide}) => {

    if (hide) {
        return (
          <></>
        )
    }

  return (

    <Movies__list>
        {movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>)}
    </Movies__list>
  )
}

export default MovieList
