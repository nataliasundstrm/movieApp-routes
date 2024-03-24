import React, { useContext } from 'react'
import MovieList from '../components/MovieList';
import { FavoritesContext } from '../context/FavoritesContext';


const FavoriteMovies = () => {

    const { favorites } = useContext(FavoritesContext)

    if (favorites == '') {
        return (
            <div style={{maxHeight: '100%', height: '100vh'}}>
                <p style={{color: '#F5C519', fontFamily: 'poppins'}}>You have no movies, series or games saved yet...</p>
            </div>
        )
    } 

    return (
        <MovieList />
    )
}

export default FavoriteMovies