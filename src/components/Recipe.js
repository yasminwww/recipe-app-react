import React from 'react'
import { log } from '../log'
import styled from 'styled-components'

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
    padding: 20px;
    font-family: 'Pacifico', cursive;
  }
  .recipe-card {
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease 0s;
    margin-top: 20px;
  }
  .image-container {
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
  }
  .image-container img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Recipe = ({ recipes }) => {
  log('re:', recipes)
  const handleOnClick = (name) => console.log(name)
  return (
    <RecipeWrapper>
      <div className='gallery-header'>Recipes</div>
      <div className='gallery-wrapper'>
        {recipes &&
          recipes.map((recipe) => (
            <div
              key={recipe.recipe.calories}
              className='recipe-card'
              onClick={() => handleOnClick(recipe.recipe.label)}
            >
              <div className='image-container'>
                <img src={recipe.recipe.image} alt=''></img>
              </div>
              <p>{recipe.recipe.label}</p>
              <div>{recipe.recipe.calories}</div>
            </div>
          ))}
      </div>
    </RecipeWrapper>
  )
}

export default Recipe
