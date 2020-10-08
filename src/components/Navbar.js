import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  /* width: 100%; */
  nav {
    display: flex;
    justify-items: center;
    justify-content: space-evenly;
    padding: 10px;
  }
  .nav-links {
    display: flex;
  }
  .nav-links a {
    text-decoration: none;
    padding-right: 20px;
    font-family: 'Questrial', sans-serif;
  }
  .logo {
    font-family: 'Fredoka One', cursive;
    font-size: 30px;
  }
`

const Navbar = () => {
  return (
    <div>
      <Wrapper>
        <nav className='nav-bar'>
          <div className='logo'>YUMS</div>
          <div className='nav-links'>
            <Link to='/'>Home </Link>
            <Link to='/about'>About</Link>
          </div>
        </nav>
      </Wrapper>
    </div>
  )
}

export default Navbar
