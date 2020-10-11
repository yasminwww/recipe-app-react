import React, { useContext } from 'react'
import { log } from '../log'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchForm from './SearchForm'

const Wrapper = styled.div`
  .nav-bar {
    display: flex;
    justify-items: center;
    justify-content: space-evenly;
    padding: 20px;
    /* background: url(${lemons}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
  }

  .nav-links {
    display: flex;
  }
  .nav-links a {
    text-decoration: none;
    padding-right: 3rem;
    margin-top: 10px;
    color: black;
    /* font-weight: bold; */
    font-size: 25px;
  }
  .logo {
    font-family: 'Fredoka One', cursive;
    font-size: 30px;
  }
`

const Navbar = () => {
  // const { setFullQuery } = useContext(SearchContext)

  return (
    <div>
      <Wrapper>
        <nav className='nav-bar'>
          <div className='logo'>YUMMY</div>
          <div className='nav-links'>
            <Link to='/'>Home </Link>
            <Link to='/about'>About</Link>
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
