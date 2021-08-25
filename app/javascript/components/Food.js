import React from "react";

const Food = (props) => {
  return(
    <div>
      <h1>Food</h1>
      <p>{props.food.name}</p>
      <p>{props.food.ingred1}</p>
      <p>{props.food.ingred2}</p>
      <a style={{ margin: "10px 15px 15px 25px"}} href="/">Home</a>
      <a style={{ margin: "10px 15px 15px 25px"}} href="/foods">Foods</a>
    </div>
  )
}

export default Food;