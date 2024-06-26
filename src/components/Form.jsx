import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const FormContainer = styled.div`
  margin: 0;
  padding; 0;
  
  p {
    margin: 0;
    padding; 0;
    font-family: poppins;
    font-size: 16px;
    color: #F5C519;
  }
`;

const Search = styled.form` 
  display: flex;
  padding: 0 0 1rem 0;
  margin: 0;
  max-width: 100%;
  width: 70rem;

  input {
    max-width: 980px;
    width: 100%;
  }

  select {
    max-width: 140px;
    width: 100%;
  }

  input,
  select {
    padding: 1rem 2rem 1rem 2rem; 
    border: 0;
    border-radius: 2rem;
    background-color: #121212;
    color: #FFF;
    font-size: 16px;
    font-family: poppins;
    font-weight: 400;
  }
  
  input {
    margin: 0 0.5rem 0 0;
  }

`;

const Form = ({search, setSearch, category, setCategory, error}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
      }
    
      const handleSearch = (event) => {
        setSearch(event.target.value)
      }
    
      const options = [
        {label: 'All', value: ''},
        {label: 'Movie', value: 'movie'},
        {label: 'Series', value: 'series'},
        {label: 'Game', value: 'game'}
      ]
    
      const handleCategory = (event) => {
        setCategory(event.target.value)
      }

    return (
      <FormContainer>
        <Search onSubmit={handleSubmit}>
          <motion.input
            whileFocus={{
              color: '#F5C519',
              outlineColor: '#F5C519',
            }} 
            
            type='search'
            placeholder='Search...'
            value={search}
            onChange={handleSearch}
            />

            <motion.select
              whileFocus={{
                outlineColor: '#F5C519',
              }} 

              value={category} 
              onChange={handleCategory}
            >
              {options.map(option => (
                <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                </option>
              ))}
            </motion.select>

        </Search>
        <p>{error.message}</p>
      </FormContainer>
  )
}

export default Form
