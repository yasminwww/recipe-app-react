import React from 'react'

const Recipe = ({ hitts }) => {
  console.log(hitts)
  // const {recepie:}
  return (
    <>
      <div>{hitts.recipe.title}</div>
      <img src={hitts.recipe.image} alt=''></img>
      <div>{hitts.recipe.calories}</div>
      <div>{hitts.recipe.calories}</div>
    </>
  )
}

export default Recipe
