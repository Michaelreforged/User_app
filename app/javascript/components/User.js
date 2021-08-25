import React from "react";

const User = (props) => {
  return(
    <div>
    <h1>User</h1>
    <p>{props.user.name}</p>
    <p>{props.user.age}</p>
    <a href="/">Home</a>
  </div>
  )
}
export default User;