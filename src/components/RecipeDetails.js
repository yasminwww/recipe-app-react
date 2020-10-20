import React from 'react'
import { log } from '../log'
import styled from 'styled-components'

const Modal = styled.div``

const RecipeDetails = ({ recipeDetails }) => {
  return (
    <Modal>
      <div>
        <p>{recipeDetails.uri}</p>
      </div>
    </Modal>
  )
}

export default RecipeDetails
