import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root.jsx'
import ClickedMovie from './pages/ClickedMovie.jsx'
import MovieAPI from './pages/MovieApi.jsx'
import FavoriteMovies from './pages/FavoriteMovies.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/clicked-movie/:id",
        element: <ClickedMovie />,
      },
      {
        path: "/favorite-movies/",
        element: <FavoriteMovies />,
      },
      {
        path: "/search/",
        element: <MovieAPI />,
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
