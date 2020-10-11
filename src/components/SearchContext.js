import React, { createContext, useState } from 'react'

export const SearchContext = createContext(null)

const SearchContextProvider = (props) => {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')
  const [fullQuery, setFullQuery] = useState('')
  return (
    <SearchContext.Provider value='hello'>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
