import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import {USER_REGISTER_RESET} from '../constance/userConstance'

const Signup = ({history }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      dispatch({type:USER_REGISTER_RESET})
      history.push("/");
      
    }
  }, [history, userInfo,dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

    return (
        <Container>
        <Row className="justify-content-md-center">
        <Col  xs={6}>
        <h1>Sign Up</h1>
        {message && (
          <h6 style={{ backgroundColor: "red", display: "inline" }}>{message}</h6>
        )}
        {error && (
          <h6 style={{ backgroundColor: "red", display: "inline" }}>{error}</h6>
        )}
      <Form  onSubmit={submitHandler}>


      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name"  value={name}
      onChange={(e) => setName(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  value={email}
      onChange={(e) => setEmail(e.target.value)}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={password}
      onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}/>
  </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Col>
  </Row>
  </Container>
    )
}

export default Signup
