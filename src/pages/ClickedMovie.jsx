import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const MovieContent = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  img {
    border-radius: 0.5rem;
  }
`;
  
  const MovieText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4,
    p {
      margin: 0;
      color: #fff;
    }

    h4 {
      font-size: 25px;
      font-weight: 600;
      margin: 0;
      padding: 0 0 1rem 0;
    }

    p {
      font-size: 16px;
      font-weight: 400:
    }

    & > p:nth-of-type(1) {
      padding: 0 0 1rem 0;
    }

    & > p:nth-of-type(2),
    & > p:nth-of-type(3) {
      padding: 0 0 0.25rem 0;
    }

    & > p:nth-of-type(4) {
      padding: 0 0 1rem 0;
    }
    
    b {
      font-weight: 500;
    }
`;

const MovieGenre = styled.div`
  display: flex;
  padding-bottom: 1rem;
  
  & > p {
    background-color: #F5C519;
    color: #000;
    font-weight: 500;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
  }

  & > p:nth-of-type(1) {
    margin: 0;
  }
`;

const BackLink = styled(Link)`
  color: #ffffff;
  font-family: poppins;
  text-decoration: none;
  
  &:hover {
    color: #F5C519;
  }
`;

const ClickedMovie = () => {
    const [movie, setMovie] = useState([])
    const { id } = useParams()
  
    const fetchMovie = async () => {

      try {
        // Get clicked movie
        const response = await fetch(`https://www.omdbapi.com/?apikey=d34fb9a1&i=${id}`)
        const data = await response.json()
        setMovie(data)

      } catch {
        console.log(error)
      }
      
    }
  
    // "Runs" the API with clicked movie
    useEffect(() => {
      fetchMovie()
    }, [])

    let genre = movie?.Genre;
    let splitGenre = genre?.split(",")

  return (
    <MovieContent>
        <img src={movie.Poster} alt="" />
        <MovieText>
            <h4>{movie.Title}</h4>
            <p><b>Released:</b> {movie.Released} | <b>Rating:</b> {movie.imdbRating} / 10</p>
            
            <MovieGenre>
              {splitGenre?.map((value, index) => {
                return <p key={index}>{value}</p>
              })}
            </MovieGenre>

            <p><b>Writer:</b> {movie.Writer}</p> 
            <p><b>Actors:</b> {movie.Actors}</p>
            <p><b>About:</b> {movie.Plot}</p>

            <BackLink to="/search">&larr; Back</BackLink>
            
        </MovieText>
    </MovieContent>
  )
}

export default ClickedMovie
