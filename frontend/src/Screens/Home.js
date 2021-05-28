import React from 'react'
import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";

const Home = () => {
    const dispatch = useDispatch();

 
 const [message, setMessage] = useState(null);
 
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

    const userList = useSelector((state) => state.userList);
   const { users } = userList;

  
//   useEffect(() => {
//     if (userInfo) {
//       dispatch(listUsers())
//     } 
//   }, [dispatch,  userInfo, users])
console.log(users);
console.log(userInfo);
  const userDetails = (e) => {
    e.preventDefault();

    if (userInfo) {   
      dispatch(listUsers());
      console.log(users);
    } else { 
      setMessage("Please Sign In");
    }
  };
  return ( 
    <div>
      <Button onClick={userDetails}> User Details</Button>
      <br />
      {message && (
        <h6 style={{ backgroundColor: "red", display: "inline" }}>{message}</h6>
      )}
      
        <Table striped bordered hover responsive className="table-sm" >
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      
    </div>
  )
}

export default Home
