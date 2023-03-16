import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const User = ( ) => {
    const {fname , lname} = useParams();
    const Location = useLocation();
    const History = useNavigate();

    // const msg = () => {
    //     alert("You got me xd");
    // };

  return (
    <>
      <h1>User {fname} {lname} page</h1>
      <p> My current location is {Location.pathname} </p>
      {Location.pathname === `/user/Umar/Aziz` ? ( 
        <button onClick = { () => History(-1)}> Click Me</button> )
        : null
      }
    </>
  )
}

export default User;
