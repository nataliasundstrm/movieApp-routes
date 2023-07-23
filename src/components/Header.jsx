import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContent = styled.div`
    height: 96px;
    display: flex; 
    justify-content: space-between;
    align-items: center;

   a {
      text-decoration: none;
      font-family: poppins;
      font-size: 16px;
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
  {linkName: 'Home', hRef: '/'},
  {linkName: 'Favorites', hRef: '/'},
  {linkName: 'Search', hRef: '/'}
]

const Header = () => {
  return (
    <header>
        <HeaderContent>
          <div>
            <Link to='/'>IMdb</Link>
          </div>

          <nav>
            {
              navLinks.map(navLink => (
                <Link to={navLink.hRef}>{navLink.linkName}</Link>
              ))
            }
          </nav>

        </HeaderContent>
    </header>
  )
}

export default Header
