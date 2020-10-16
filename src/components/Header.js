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
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .header-content {
    /* background: url(${meal}) no-repeat; */
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr; */

    justify-content: center;
    align-items: center;
    /* 
    justify-items: center;
    align-items: center; */
  }
  .header-text {
    position: absolute;
    /* display: flex; */
    text-align: center;
    /* justify-items: center; */
    /* align-items: center; */
    background-color: rgba(0, 0, 0, 0.2);
    padding: 30px;
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
