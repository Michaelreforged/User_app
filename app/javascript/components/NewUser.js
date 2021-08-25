import React from "react";

const NewUser = (props) =>{
  return (
    <div> 
    <h1>Users</h1>
    <form action="/users" method = "post">
    <p>Name</p>
    <input name="user[name]"/>    
    <p>age</p>
    <input name="user[age]"/>
    <button type ="submit">Add New User</button>
    </form>
    <a style={{ margin: "10px 15px 15px 25px"}} href="/">Home</a>
    <a style={{ margin: "10px 15px 15px 25px"}} href="/users">Users</a>
    </div>
    
  )
}

export default NewUser;