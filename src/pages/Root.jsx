// För att installera REACT:
// - 1. Skapa en mapp 
// - 2. npm create vite@latest

// Starta REACT: 
// - npm run dev 

// Installera node 
// - npm install 

import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavoritesProvider from '../context/FavoritesContext';

const Root = () => {
    return(
        <FavoritesProvider>
            <Header />
            <section>
                <div>
                    <Outlet />
                </div>
            </section>
            <Footer />
        </FavoritesProvider>
    )
}

export default Root
