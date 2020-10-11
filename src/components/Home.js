import React, { useEffect, useState, useContext } from 'react'
import { log } from '../log'
import styled from 'styled-components'
import Header from './Header'
import Recipe from './Recipe'
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

const Home = () => {
  const { recipes } = useContext(SearchContext)

  const [query, setQuery] = useState('')
  const [fullQuery, setFullQuery] = useState('')

  const API_ID = process.env.REACT_APP_API_ID
  const API_KEY = process.env.REACT_APP_API_KEY

  const example = `https://api.edamam.com/search?q=${fullQuery}&app_id=${API_ID}&app_key=${API_KEY}`

  // useEffect(() => {
  //   getRecipes()
  // }, [fullQuery])

  // const getRecipes = async () => {
  //   const response = await fetch(example)
  //   const data = await response.json()

  //   const { hits: recipe } = data
  //   // setRecipes(recipe)
  // }

  const getFullQuery = (e) => {
    e.preventDefault()
    setFullQuery(query)
    setQuery('')
  }

  const placeholder = 'Search by ingredient, name, first letter...'

  return (
    /*recipes ?*/ <Wrapper>
      {/* <div className='form-container'>
        <form className='search-form' onSubmit={getFullQuery}>
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
      </div> */}

      <Recipe recipes={recipes} />
    </Wrapper>
  )
  /* : (
    <Header />
  )*/
}

export default Home
