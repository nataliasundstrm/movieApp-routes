import React from 'react'
import styled from 'styled-components'

const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 0 6rem 0;

    p {
        font-family: poppins;
        color: #ffffff;
        font-size: 16px;
    }
`;

const Footer = () => {
  return (
    <footer>
        <div>
        <FooterContent>
            <p>Copyright &copy; 2023 IMDb</p>
        </FooterContent>
        </div>
    </footer>
  )
}

export default Footer
