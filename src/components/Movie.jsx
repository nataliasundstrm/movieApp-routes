import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const MovieCard = styled(motion.div)`
  position: relative; 
  height: 440px; 
  width: 100%;
  background-color: #121212;
  padding: 1rem;
  border-radius: 0.25rem;
`;

const MovieImg = styled.div`
  img {
    width: 200px;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }

  display: flex;
  justify-content: center; 
  align-items: center
`;

const MovieContent = styled.div`
  position: absolute;
  bottom: 0;

  h6,
  p {
    margin: 0;
    font-family: poppins;
  }
  
  h6 {
    font-size: 16px;
    padding: 0;
    font-weight: 600;
    color: #FFFFFF;
  }
  
  p {
    font-size: 12px;
    margin: 0;
    padding: 0.5rem 0 1rem 0;
    font-weight: 400;
    color: #F5C519;
  }
`;

const Movie = ({movie}) => {

  const characters = (title, numbers) => {
    return title?.length > numbers ? title.substr(0, numbers - 1) + "..." : title;
  };

  return (
    <MovieCard
      as={motion.div}
      whileHover={{
        scale: 1.015,
        cursor: 'pointer',
      }}
    >
      <MovieImg>
        <img src={movie.Poster} alt="" />
      </MovieImg>

      <MovieContent>
        <h6>
          {characters(movie.Title, 20)}
        </h6>
        <p>Year: {movie.Year} | Type: {movie.Type}</p>
      </MovieContent>
    </MovieCard>
  )
}

export default Movie
