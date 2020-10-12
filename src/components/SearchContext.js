import React, { createContext, useState, useEffect } from 'react'
import { log } from '../log'

export const SearchContext = createContext()

const SearchContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])
  const [fullQuery, setFullQuery] = useState('')

  const API_ID = process.env.REACT_APP_API_ID
  const API_KEY = process.env.REACT_APP_API_KEY

  const example = `https://api.edamam.com/search?q=${fullQuery}&app_id=${API_ID}&app_key=${API_KEY}`

  useEffect(() => {
    getRecipes()
  }, [fullQuery])

  log('full query', fullQuery)

  // Toggle funtion from props
  const getRecipes = async () => {
    const response = await fetch(example)
    const data = await response.json()

    const { hits: recipe } = data
    setRecipes(recipe)
  }

  return (
    <SearchContext.Provider value={{ recipes, setFullQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
