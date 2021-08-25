import React from "react";

const EditFood = (props) => {
  return(
    <div>
      <h1>Edit Food Combinations</h1>
      <form action = {`/foods/${props.food.id}`} method="post">
      <input type="hidden" name="_method" value="patch"/>
        <p>Dish Name</p>
        <input defaultValue={props.food.name} name = "food[name]"/>
        <p>First Ingredient Name</p>
        <input defaultValue={props.food.ingred1} name = "food[ingred1]"/>
        <p>Second Ingredient Name</p>
        <input defaultValue={props.food.ingred2} name = "food[ingred2]"/>
        <button type="submit">Update Foods</button>

      </form>
      <a style={{ margin: "10px 15px 15px 25px"}} href="/">Home</a>
      <a style={{ margin: "10px 15px 15px 25px"}} href="/foods">Foods Menu</a>
    </div>
  )
}

export default EditFood