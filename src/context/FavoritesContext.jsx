import React, { createContext, useState } from 'react'

export const FavoritesContext = createContext()

const FavoritesProvider = ({ children }) => {
  const [addToFavorites, setAddToFavorites] = useState({})
  const [favorites, setFavorites] = useState([])

  const handleFavorites = (movie) => {
    const isFavorite = favorites.some(favorite => favorite.imdbID === movie.imdbID) 

    if (isFavorite) {
      const updateFavorite = favorites.filter(favorite => favorite.imdbID !== movie.imdbID); 
      setFavorites(updateFavorite)

      setAddToFavorites(prevState => ({
        ...prevState,
        [movie.imdbID]: false,
      }));
      
    } else {
      setFavorites([...favorites, movie]);
      
      setAddToFavorites(prevState => ({
        ...prevState,
        [movie.imdbID]: true,
      }));
    }
    
  };

  return (
    <FavoritesContext.Provider
      value={{
        addToFavorites,
        setAddToFavorites,
        favorites,
        setFavorites,
        handleFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider