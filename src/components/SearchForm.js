import React, { useEffect, useState, useContext } from 'react'
import { log } from '../log'
import styled from 'styled-components'

import { SearchContext } from './SearchContext'

const Wrapper = styled.div`
  .form-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .search-form {
    margin-top: 2vh;
    font-size: 30px;
  }
  .search-bar {
    padding: 10px;
    border-radius: 10px;
    width: 40vw;
    margin-bottom: 5vh;
  }
  .search-button {
    margin-left: 10px;
    padding: 10px;
    border-radius: 10px;
  }
`

const SearchForm = () => {
  const { setFullQuery } = useContext(SearchContext)

  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFullQuery(query)
    setQuery('')
  }

  const placeholder = 'Search by ingredient, name, first letter...'

  return (
    <Wrapper>
      <div className='form-container'>
        <form className='search-form' onSubmit={handleSubmit}>
          <input
            type='text'
            className='search-bar'
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type='submit' className='search-button'>
            Search
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default SearchForm
