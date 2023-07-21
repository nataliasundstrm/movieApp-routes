import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeaderContent = styled.div`
    height: 96px;
    display: flex; 
    justify-content: space-between;
    align-items: center;

    div > a, 
    li > a {
        font-family: poppins; 
    }
  
    div > a {
        font-size: 31.25px;
        color: #F5C519;
        text-decoration: none; 
        font-weight: 600;
    }

    ul {
        list-style: none;
        padding: 0;
        margin; 0;
        display: flex;
    }
  
    li {
        font-size: 16px;
        padding-left: 0.5rem;
    }
  
    li > a {
        text-decoration: none;
        color: #ffffff;
    }
  
`;

const menuLinks = [
    {
        link: 'Home', 
        hRef: 'https://www.google.com/', 
        id: 1
    },
    {
        link: 'Favorites',
        hRef: 'https://caiacosmetics.se/', 
        id: 2
    },
    {
        link: 'Search', 
        hRef: 'https://adsgn.se/', 
        id: 3
    }
]

const Header = () => {
  return (
    <header>
      <div>
        <HeaderContent>
          <div>
            <a href="">IMDb</a>
          </div>

          <ul>
            {menuLinks.map(menuLink => (
              <li key={menuLink.id}>
                <motion.a
                  whileHover={{
                    color: '#F5C519' 
                  }}
                  href={menuLink.hRef}
                >
                  {menuLink.link}
                </motion.a>
              </li>
            ))}
          </ul>

        </HeaderContent>
      </div>
    </header>
  )
}

export default Header
