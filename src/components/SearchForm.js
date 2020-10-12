import React, { useState, useContext } from 'react'
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
    font-size: 30px;
  }
  .search-bar {
    padding: 10px;
    border-radius: 10px;
    width: 20vw;
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
  log(setFullQuery)
  const localtionURL = 'http://localhost:3000/'
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const current =
      window.location.href !== localtionURL
        ? window.location.assign(localtionURL)
        : window.location.href
    setFullQuery(query)
    setQuery('')
    // log(current)
  }

  const placeholder = 'Search by ingredient, name, first letter...'

  return (
    <Wrapper>
      <div className='form-container'>
        <form className='search-form' action='/' onSubmit={handleSubmit}>
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
