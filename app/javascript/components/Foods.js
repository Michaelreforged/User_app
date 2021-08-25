import React from 'react'
import User from './User'

const Foods = (props) =>{
  return (
    <div>
      <h1>Foods</h1>
      <p>Welcome to whacky food adventure pages. Dishes are listed below with 2 ingredients that should be incorperated into the dish somehow, good luck with your combinations and may they taste great.</p>
      <a style={{ margin: "10px 15px 15px 25px"}} href = {`/foods/new`}>Create New Dish Combination</a>
      <a style={{ margin: "10px 15px 15px 25px"}} href = {`/`}>Home</a>
      {props.foods.map((food) =>{
        return(
          <div key={food.id}>
            <p>Dish Name: {food.name}</p>
            <p>Ingredients to incorperate: {food.ingred1} and {food.ingred2}</p>
            <a style={{ margin: "10px 15px 15px 25px"}} href = {'/foods/${food.id}'}>Food Dish</a>
            <a style={{ margin: "10px 15px 15px 25px"}} href = {'/foods/${food.id}/edit'}>Edit Food Dish</a>
            <a style={{ margin: "10px 15px 15px 25px"}} href = {'/foods/${food.id}'} data-method = "delete">Delete Food Dish</a>
          </div>  
        )
      }
      )}
    </div>
  )
}

export default Foods