import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
 
  const userLogin = useSelector((state) => state.userLogin);
  const {  userInfo } = userLogin;

 const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

    // useEffect(() => {
    //     if (loading) {
    //         setMessage("Loading");
            
           
    //       }
    //      else if (!loading) {
    //         setMessage("");
            
           
    //       }
          
    // }, [loading])
  console.log(users);
  console.log(userInfo);
  const userDetails = (e) => {
    e.preventDefault();
dispatch(listUsers());
    console.log(loading)  // false
   

     
     if (!userInfo) {
      setMessage(`Please Sign In`);
    }
  };

   
  return (
    <div>
    <br />
      <Button onClick={userDetails}> User Details</Button>
      <br />
      {message && (
        <h6 style={{ backgroundColor: "red", display: "inline" }}>{message}</h6>
      )}
      {loading && (
        <h6 style={{ backgroundColor: "red", display: "inline" }}>Loading...</h6>
      )}
    
     <br />
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {(users || []).map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HomeScreen;
