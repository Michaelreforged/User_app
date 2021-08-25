import React from "react";

const EditUser = (props) => {
  return(
    <div>
    <h1>Edit User</h1>
    <form action ={`/users/${props.user.id}`} method="post">
      <input type="hidden" name="_method" value="patch" />
      <p>Title</p>
      <input defaultValue={props.user.name} name= "user[name]"/>
      <p>Description</p>
      <input defaultValue={props.user.age} name= "user[age]"/>
      <button type="submit">Update user</button>
    </form>
    <a href="/">Home</a>
  </div>
  )
}
export default EditUser;