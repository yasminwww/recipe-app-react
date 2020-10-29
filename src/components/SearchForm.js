import React, { useState, useContext } from 'react'
import { log } from '../log'
import styled from 'styled-components'

import { SearchContext } from './SearchContext'

const Wrapper = styled.div`
  --brdr: 2px solid rgb(167, 216, 166, 0.5);
  .search-form {
    display: flex;
    padding: 2px;
    border: var(--brdr);
    border-radius: 40px;
  }
  .search-bar {
    /* flex: 1; */
    border-radius: 40px;
    border: 0;
    outline: none;
    min-width: 300px;
    padding-left: 9px;
  }
  .search-button {
    padding: 7px;
    border: var(--brdr);
    opacity: 0.6;
    transition: 0.3s;
    border-radius: 50%;
    cursor: pointer;
  }
  .search-button:hover {
    opacity: 1;
  }
`

const SearchForm = () => {
  const { setFullQuery } = useContext(SearchContext)
  const localtionURL = 'http://localhost:3000/'
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('lastQuery', query)
    setFullQuery(query)
    setQuery('')

    const current =
      window.location.href !== localtionURL
        ? window.location.assign(localtionURL)
        : window.location.href
  }

  const placeholder = 'Search by ingredient, title...'

  return (
    <Wrapper>
      <form className='search-form' action='/' onSubmit={handleSubmit}>
        <input
          type='text'
          className='search-bar'
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button type='submit' className='search-button'>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </Wrapper>
  )
}

export default SearchForm
