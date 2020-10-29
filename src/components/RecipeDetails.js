import React from 'react'
import { log } from '../log'
import styled from 'styled-components'

const Modal = styled.div`
  .wrapper {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 1000;
    position: fixed;
  }
  .modal {
  }
`

const RecipeDetails = ({ open, recipeDetails, onClose }) => {
  return open ? (
    <Modal>
      <div className='wrapper' onClick={onClose}>
        <div className='modal'>
          <p>{recipeDetails.uri}</p>
        </div>
      </div>
    </Modal>
  ) : null
}

export default RecipeDetails
