import React, { useContext } from 'react'
import MovieList from '../components/MovieList';
import { FavoritesContext } from '../context/FavoritesContext';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 100%;
  height: calc(100vh - 441px);

`

const FavoriteMovies = () => {

    const { favorites } = useContext(FavoritesContext)

    if (favorites == '') {
        return (
            <Container>
                <p >You have no movies, series or games saved yet...</p>
            </Container>
        )
    } 

    return (
        <MovieList />
    )
}

export default FavoriteMovies