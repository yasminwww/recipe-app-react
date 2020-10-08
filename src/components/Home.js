import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import lemons from '../images/lemons.jpg'
import Header from './Header'

const Wrapper = styled.div`
  .form-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .search-form {
    margin-top: 2vh;
  }
  .search-bar {
    padding: 10px;
    border-radius: 10px;
    width: 400px;
    margin-bottom: 5vh;
  }
  button {
    margin-left: 10px;
    padding: 10px;
    border-radius: 10px;
  }

  .gallery-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 340px));
    justify-content: center;
    grid-row-gap: 10px;
  }
  .recipe-card {
    width: 100%;
  }
`

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')
  const [fullQuery, setFullQuery] = useState('')
  const API_ID = process.env.REACT_APP_API_ID
  const API_KEY = process.env.REACT_APP_API_KEY

  const example = `https://api.edamam.com/search?q=${fullQuery}&app_id=${API_ID}&app_key=${API_KEY}`

  useEffect(() => {
    getRecipes()
  }, [fullQuery])

  const getRecipes = async () => {
    const response = await fetch(example)
    const data = await response.json()
    console.log(data.hits)

    setRecipes(data.hits)
  }

  const getInputQuery = (e) => {
    setQuery(e.target.value)
  }
  const getFullQuery = (e) => {
    e.preventDefault()
    setFullQuery(query)
    setQuery('')
  }

  return (
    <Wrapper>
      <div className='form-container'>
        <form className='search-form' onSubmit={getFullQuery}>
          <input
            type='text'
            className='search-bar'
            placeholder='Search by ingredient, name, first letter...'
            value={query}
            onChange={getInputQuery}
          ></input>
          <button type='submit' className='search-button'>
            Search
          </button>
        </form>
      </div>
      {fullQuery === '' ? <Header /> : null}
      <div className='background'>
        <div className='gallery-wrapper'>
          {recipes &&
            recipes.map((recipe) => (
              <div key={recipe.recipe.calories} className='recipe-card'>
                <img src={recipe.recipe.image} alt=''></img>
                <p>{recipe.recipe.label}</p>
                <div>{recipe.recipe.calories}</div>
              </div>
            ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Home
