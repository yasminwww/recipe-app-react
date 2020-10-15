import React from 'react'
import { log } from '../log'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchForm from './SearchForm'

const Wrapper = styled.div`
  .nav-bar {
    display: flex;
    padding-top: 13px;
    justify-content: space-evenly;
    /* align-items: center; */
  }

  .nav-links {
    display: flex;
    align-items: baseline;
  }
  .nav-links a {
    text-decoration: none;
    padding-right: 3rem;
    color: black;
    cursor: pointer;
    font-size: 23px;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-family: 'Fredoka One', cursive; */
    font-family: 'Pacifico', cursive;
    font-size: 40px;
    padding: 10px;
    border-top: 7px dotted #b6b6b6;
    border-bottom: 7px dotted #b6b6b6;
  }
  span {
    color: #b6b6b6;
    font-size: 20px;
    align-self: end;
    padding-left: 10px;
  }
`

const Navbar = () => {
  return (
    <div>
      <Wrapper>
        <div className='logo'>
          Delish
          <span> yummy creations</span>
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
