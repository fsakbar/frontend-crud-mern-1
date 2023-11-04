import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../store/authStore"
import {Row, Col, Form, InputGroup, Button} from 'react-bootstrap';

export default function LoginForm() {
  
  const store = authStore();
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    await store.login()
    //Navigate
    navigate("/")
  } 


  return (
    <div>
      <Form className="bg-secondary text-white m-3 rounded" noValidate onSubmit={handleLogin}>
        <div className="px-5 py-3">
          <Row className="">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                defaultValue="Email"
                onChange={store.updateLoginForm}
                value={store.loginForm.email}
                name="email" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="Password"
                placeholder="Password"
                defaultValue="Password"
                onChange={store.updateLoginForm}
                value={store.loginForm.password}
                name="password" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </div>
        <div className="m-2 d-flex px-3">
          <Button className="m-3 ms-auto px-" type="submit">Login</Button>
        </div>
      </Form>

      
      {/* <div className="">
          <form onSubmit={handleLogin}>
            <input onChange={store.updateLoginForm} value={store.loginForm.email} type="email" name="email" />
            <input onChange={store.updateLoginForm} value={store.loginForm.password} type="password" name="password" />
            <button className="btn btn-success " type="submit">Login</button>
          </form>
      </div> */}
    </div>
  )
}
