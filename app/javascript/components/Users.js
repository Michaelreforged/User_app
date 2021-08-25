import React from "react";

const Users = (props) =>{
  return (
    <div> 
    <h1>Users</h1>
    <a href = {`/users/new`}>Create New User</a>
    {props.users.map((user) =>{
      return(
        <div key={user.id}> 
          <p>{user.name} Age: {user.age}</p>
          <a style={{ margin: "10px 15px 15px 25px"}} href = {`/users/${user.id}`} >User by themselves</a>
          <a style={{margin: "10px 15px 15px 25px"}} href ={`/users/${user.id}/edit`}>Edit User</a>
          <a  style={{margin: "10px 15px 15px 25px"}}href ={`/users/${user.id}`} data-method="delete">Delete User</a>
        </div>
      )
    }
    )}
    </div>
  )
}

export default Users;