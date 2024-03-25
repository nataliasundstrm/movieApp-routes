import React, { useContext } from 'react'
import styled from 'styled-components'
import { FavoritesContext } from '../context/FavoritesContext'


const Button = styled.button`
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    width: 32px;
    height: 32px;
              
    svg {
        fill: #fff;
        width: 100%;
        height: auto;
    }

`

const Favorite = ({ movie }) => {

    const {addToFavorites, handleFavorites} = useContext(FavoritesContext)

    return (
        <Button onClick={() => handleFavorites(movie)}>
            {!addToFavorites[movie.imdbID] ? (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 42 42">
                    <path d="M 16.5 5 C 12.928062 5 10 7.9280619 10 11.5 L 10 41.5 A 1.50015 1.50015 0 0 0 12.376953 42.716797 L 24 34.347656 L 35.623047 42.716797 A 1.50015 1.50015 0 0 0 38 41.5 L 38 11.5 C 38 7.9280619 35.071938 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 33.450062 8 35 9.5499381 35 11.5 L 35 38.572266 L 24.876953 31.283203 A 1.50015 1.50015 0 0 0 23.123047 31.283203 L 13 38.572266 L 13 11.5 C 13 9.5499381 14.549938 8 16.5 8 z"></path>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 42 42">
                    <path d="M36.5,43c-0.309,0-0.616-0.095-0.876-0.283L24,34.348l-11.624,8.369c-0.458,0.329-1.06,0.375-1.561,0.118	C10.315,42.579,10,42.063,10,41.5v-30C10,7.916,12.916,5,16.5,5h15c3.584,0,6.5,2.916,6.5,6.5v30c0,0.563-0.315,1.079-0.816,1.335	C36.968,42.945,36.734,43,36.5,43z"></path>
                </svg>
            )}
        </Button>
    )
}

export default Favorite