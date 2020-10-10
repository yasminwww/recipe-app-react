import React from 'react'
import { log } from '../log'
import styled from 'styled-components'
import spices from '../images/spices.jpg'

const Wrapper = styled.div`
  .expand-space {
    position: absolute;
    top: 100px;
    bottom: 0;
    width: 100%;
    background: url(${spices}) no-repeat center center;
    /* background-size: cover; */
    object-fit: cover;
  }
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
    margin-top: 15vh;
    font-weight: bold;
    justify-items: start;
  }
  p {
    width: 50%;
  }
`

const About = () => {
  log('buhu')
  return (
    <Wrapper>
      <div className='expand-space'>
        <div className='content'>
          <h2>For those who are passionate about cooking.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default About
