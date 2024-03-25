import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContent = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;

   a {
      text-decoration: none;
      padding: 0 1rem 0 0;
      
    } 
    
    & > div > a {
      font-size: 25px;
      font-weight: 600;
      color: #F5C519;
    }
    
    & > nav > a {
      color: #ffffff;
    }
    
    & > nav > a:last-of-type {
      padding: 0;
    }

    & > nav > a:hover {
      color: #F5C519;
    }
`;

const navLinks = [
  {linkName: 'Home', hRef: '/', id: 1},
  {linkName: 'Favorites', hRef: '/favorite-movies', id: 2},
  {linkName: 'Search', hRef: '/search', id: 3}
]

const Header = () => {
  return (
    <header>
        <HeaderContent>
          <div>
            <Link to='/'>IMDb</Link>
          </div>

          <nav>
            {
              navLinks.map(navLink => (
                <Link 
                  to={navLink.hRef} 
                  key={navLink.id}
                >
                  {navLink.linkName}
                </Link>
              ))
            }
          </nav>

        </HeaderContent>
    </header>
  )
}

export default Header
