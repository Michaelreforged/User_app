import React from "react";

const NewFood = (props) =>{
  return (
    <div> 
    <h1>Users</h1>
    <form action="/foods" method = "post">
    <p>Name</p>
    <input name="food[name]"/>    
    <p>Ingredient 1</p>
    <input name="food[ingred1]"/>
    <p>Ingredient 2</p>
    <input name="user[ingred2]"/>
    <button type ="submit">Add New Food</button>
    </form>
    <a style={{ margin: "10px 15px 15px 25px"}} href="/">Home</a>
    <a style={{ margin: "10px 15px 15px 25px"}} href="/foods">Full List of Dish Combinations</a>
    </div>
    
  )
}

export default NewFood ;