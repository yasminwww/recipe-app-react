import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')
  const [fullQuery, setFullQuery] = useState('')
  const API_ID = process.env.REACT_APP_API_ID
  const API_KEY = process.env.REACT_APP_API_KEY

  const apiURL = `https://api.edamam.com/search?q=${fullQuery}&app_id=${API_ID}&app_key=${API_KEY}`
  // eslint-disable-next-line
  useEffect(() => getRecipes(), [fullQuery])

  const getRecipes = async () => {
    const response = await fetch(apiURL)
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
    <div className='form-container'>
      <form className='search-form' onSubmit={getFullQuery}>
        <input
          type='text'
          className='serach-bar'
          value={query}
          onChange={getInputQuery}
        ></input>
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>

      {recipes &&
        recipes.map((recipe) => (
          <Recipe key={recipe.recipe.calorie} hitts={recipe.recipe} />
        ))}
    </div>
  )
}

export default Home
