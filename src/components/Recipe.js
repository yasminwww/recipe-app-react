import React, { useState } from 'react'
import { log } from '../log'
import styled from 'styled-components'
import RecipeDetails from './RecipeDetails'

const RecipeWrapper = styled.div`
  .gallery-wrapper {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, auto)) !important;
    justify-content: center;
    grid-gap: 20px 20px;
  }
  .gallery-header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .recipe-card {
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease 0s;
    border: 2px solid #e6e6e6;
  }
  .image-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 200px;
  }
  .image-container img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .info-section {
    padding: 10px;
  }
  .info-section p {
    font-size: 15px;
  }
`

const Recipe = ({ recipes }) => {
  const [recipeDetails, setRecipeDetails] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = (shareAs) => {
    setRecipeDetails(...recipes.filter((item) => item.shareAs === shareAs))
    setIsOpen(true)
    log(recipeDetails)
  }

  // handleOnClick(recipe.shareAs)
  return (
    <>
      <RecipeWrapper>
        <RecipeDetails
          open={isOpen}
          recipeDetails={recipeDetails}
          onClose={() => setIsOpen(false)}
        />
        {recipes.length > 0 && (
          <div className='gallery-header'>Recipe search result</div>
        )}
        <div className='gallery-wrapper'>
          {recipes &&
            recipes.map((recipe) => (
              <div
                key={recipe.shareAs}
                className='recipe-card'
                onClick={() => handleOnClick(recipe.shareAs)}
              >
                <div className='image-container'>
                  <img src={recipe.image} alt=''></img>
                </div>
                <div className='info-section'>
                  <p>{recipe.label}</p>
                  <div>kcal: {Math.round(recipe.calories)}</div>
                </div>
              </div>
            ))}
        </div>
      </RecipeWrapper>
    </>
  )
}

export default Recipe
