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
    /* font-family: 'Pacifico', cursive; */
    font-size: 30px;
  }
  .recipe-card {
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease 0s;
    margin-top: 20px;
    border: 2px solid #e6e6e6;
  }
  .image-container {
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
    height: 300px;
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
    font-size: 20px;
  }
`

const Recipe = ({ recipes }) => {
  const [recipeDetails, setRecipeDetails] = useState([])

  const handleOnClick = (shareAs) =>
    setRecipeDetails(...recipes.filter((item) => item.shareAs === shareAs))

  return (
    <>
      <RecipeWrapper>
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
      <RecipeDetails recipeDetails={recipeDetails} />
    </>
  )
}

export default Recipe
