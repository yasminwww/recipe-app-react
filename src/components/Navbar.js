import React, { useContext } from 'react'
import { log } from '../log'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchForm from './SearchForm'
import { SearchContext } from './SearchContext'

const Wrapper = styled.div`
  .nav-bar {
    display: flex;
    padding-top: 13px;
    margin-bottom: 5vh;
  }

  .nav-links {
    --brdr: 2.3px solid #4d7810;
    justify-content: space-between;
    border-bottom: var(--brdr);
    border-top: var(--brdr);
    display: flex;
    align-items: baseline;
    padding: 10px 0 10px;
    width: 100%;
  }
  .nav-links a {
    text-decoration: none;
    padding-right: 4.4rem;
    color: black;
    cursor: pointer;
    font-size: 23px;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'Pacifico', cursive;
    font-size: 40px;
    padding: 10px;
  }
  span {
    color: #b6b6b6;
    font-size: 20px;
    align-self: end;
    padding-left: 10px;
  }
`

const Navbar = () => {
  const { setRecipes } = useContext(SearchContext)

  const handleClick = (e) => {
    e.preventDefault()
    setRecipes([])
  }
  return (
    <div>
      <Wrapper>
        <div className='logo' onClick={(e) => handleClick(e)}>
          Delish
          <span> yummy delicious.</span>
        </div>

        <nav className='nav-bar'>
          <div className='nav-links'>
            <div>
              <Link to='/'>Home</Link>
              <Link to='/'>Baked</Link>
              <Link to='/'>Stewed </Link>
              <Link to='/about'>Grilled</Link>
              <Link to='/about'>About</Link>
            </div>
            <div>
              <SearchForm />
            </div>
          </div>
        </nav>
        <div className='fast-track'>
          <div></div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Navbar
