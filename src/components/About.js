import React from 'react'
import styled from 'styled-components'
import spices from '../images/spices.jpg'

const Wrapper = styled.div`
  min-height: calc(100vh - 66px);
  background: url(${spices}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .content {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 15px;
  }

  h2,
  p {
    line-height: 30px;
  }
  h2 {
    margin-top: 30px;
    font-weight: bold;
    justify-items: start;
  }
  p {
    width: 50%;
  }
`

const About = () => {
  return (
    <Wrapper>
      <div className='content'>
        <h2>For those who are passionate about cooking.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Wrapper>
  )
}

export default About
