import React from 'react'
import { log } from '../log'
import styled from 'styled-components'

const RecipeWrapper = styled.div`
  .gallery-wrapper {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 340px));
    justify-content: center;
    grid-row-gap: 10px;
  }
  .recipe-card {
    width: 100%;
  }
`

const Recipe = ({ recipes }) => {
  log('re:', recipes)

  return (
    <RecipeWrapper>
      <div className='gallery-wrapper'>
        {recipes &&
          recipes.map((recipe) => (
            <div key={recipe.recipe.calories} className='recipe-card'>
              <img src={recipe.recipe.image} alt=''></img>
              <p>{recipe.recipe.label}</p>
              <div>{recipe.recipe.calories}</div>
            </div>
          ))}
      </div>
    </RecipeWrapper>
  )
}

export default Recipe
