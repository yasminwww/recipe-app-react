import React, { useEffect, useState, useContext } from 'react'
import { log } from '../log'
import styled from 'styled-components'
import Header from './Header'
import Recipe from './Recipe'
import { SearchContext } from './SearchContext'
import SearchForm from './SearchForm'

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
  log(recipes)

  return recipes ? (
    <Wrapper>
      <Recipe recipes={recipes} />
    </Wrapper>
  ) : (
    <Header />
  )
}

export default Home
