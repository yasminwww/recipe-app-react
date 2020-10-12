import React, { useContext } from 'react'
// import { log } from '../log'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchForm from './SearchForm'
import { SearchContext } from './SearchContext'

const Wrapper = styled.div`
  .nav-bar {
    display: flex;
    justify-items: center;
    justify-content: space-evenly;
    padding: 20px;
  }

  .nav-links {
    display: flex;
  }
  .nav-links a {
    text-decoration: none;
    padding-right: 3rem;
    margin-top: 10px;
    color: black;

    font-size: 25px;
    bottom: 0;
    right: 0;
  }
  .nav-links a span {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Fredoka One', cursive;
    font-size: 40px;
  }
`

const Navbar = () => {
  return (
    <div>
      <Wrapper>
        <div className='logo'>YUMMY</div>
        <nav className='nav-bar'>
          <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/'>Home </Link>
            <Link to='/about'>About</Link>
            <Link to='/'>Home </Link>
            <Link to='/about'>About</Link>
            <SearchForm />
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
