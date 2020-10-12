import React from 'react'
// import { log } from '../log'
import styled from 'styled-components'

const Content = styled.div`
  div {
    display: flex;
    flex-flow: column;
    height: 100%;
    margin-top: 10vh;
  }
  h1,
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Header = () => {
  return (
    <Content>
      <div>
        <h1>Hungry?</h1>
        <p>Go ahead, make your best meal ever. Again.</p>
      </div>
    </Content>
  )
}

export default Header
