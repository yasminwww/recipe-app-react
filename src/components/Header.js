import React from 'react'
// import { log } from '../log'
import styled from 'styled-components'
import meal from '../images/meal.jpg'

const Content = styled.div`
  div {
    /* display: flex;
    flex-flow: column;
    height: 100%; */
    /* margin-top: 10vh; */
    /* background-color: red; */
  }
  img {
    /* display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 50%; */
  }
  .header-content {
    display: flex;

    /* justify-content: center; */
    /* 
    justify-items: center;
    align-items: center; */
  }
  .header-text {
    position: absolute;
  }
`

const Header = () => {
  return (
    <Content>
      <div className='header-content'>
        <img src={meal} alt='meal' />
        <div className='header-text'>
          <h1>Hungry?</h1>
          <p>Go ahead, make your best meal ever.</p>
        </div>
      </div>
    </Content>
  )
}

export default Header
