import React from 'react'
import { log } from '../log'
import styled from 'styled-components'
import meal from '../images/meal.jpg'

const Content = styled.div`
  .header-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .header-content {
    /* background: url(${meal}) no-repeat; */
    display: flex;

    justify-content: center;
    align-items: center;
  }
  .header-text {
    position: absolute;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 30px;
  }
`

const Header = () => {
  return (
    <Content>
      <div className='header-content'>
        <img src={meal} alt='meal' className='header-image' />
        <div className='header-text'>
          <h1>Hungry?</h1>
          <p>Go ahead, make your best meal ever.</p>
        </div>
      </div>
    </Content>
  )
}

export default Header
