import React from 'react'
import { log } from '../log'
import styled from 'styled-components'
import spices from '../images/spices.jpg'

const Wrapper = styled.div`
  .so {
    display: flex;
    /* height: 100%; */
    flex-direction: column;

    /* justify-items: center;
    align-items: center; */
    height: 100vh;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }

  .content {
    /* flex: 1; */
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h2,
  p {
    line-height: 30px;
  }
  h2 {
    font-weight: bold;
    justify-items: start;
  }
`

const About = () => {
  return (
    <Wrapper>
      <div className='so'>
        <img src={spices} alt='spices' />
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
