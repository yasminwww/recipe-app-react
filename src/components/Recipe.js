import React from 'react'

const Recipe = ({ hits }) => {
  console.log(hits)

  return (
    <>
      <div>{hits.recipe.title}</div>
      <img src={hits.recipe.image} alt=''></img>
      <div>{hits.recipe.calories}</div>
      <div>{hits.recipe.calories}</div>
    </>
  )
}

export default Recipe
