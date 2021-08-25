import React from "react";

const User = (props) => {
  return(
    <div>
    <h1>User</h1>
    <p>{props.user.name}</p>
    <p>{props.user.age}</p>
    <a style={{ margin: "10px 15px 15px 25px"}} href="/">Home</a>
    <a style={{ margin: "10px 15px 15px 25px"}} href="/users">Users</a>
  </div>
  )
}
export default User;