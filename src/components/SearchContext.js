import React, { createContext, useState, useEffect } from 'react'
import { log } from '../log'

export const SearchContext = createContext()

const SearchContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])
  const [fullQuery, setFullQuery] = useState('')
  const [lastQuery, setLastQuery] = useState('')

  const API_ID = process.env.REACT_APP_API_ID
  const API_KEY = process.env.REACT_APP_API_KEY

  const example = `https://api.edamam.com/search?q=${fullQuery}&app_id=${API_ID}&app_key=${API_KEY}&to=51`
  // const example = `https://api.edamam.com/search?r=9b5945e03f05acbf9d69625138385408&app_id=${API_ID}&app_key=${API_KEY}&to=51`

  useEffect(() => {
    getRecipes()
    const isLastQuery =
      localStorage.getItem('lastQuery') !== ''
        ? setFullQuery(localStorage.getItem('lastQuery'))
        : fullQuery
  }, [fullQuery, lastQuery])

  // Toggle funtion from props
  const getRecipes = async () => {
    const response = await fetch(example)
    const data = await response.json()

    const { hits: recipe } = data
    const dataToArr = recipe.map((item) => item.recipe)
    console.log(dataToArr)
    setRecipes(dataToArr)
  }

  return (
    <SearchContext.Provider value={{ recipes, setFullQuery, setRecipes }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
