import authStore from "../store/authStore"
import { useNavigate } from "react-router-dom"
import {Row, Col, Form, InputGroup, Button} from 'react-bootstrap';

export default function SignupForm() {
    const store = authStore()
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()
        await store.signup()

        navigate("/login")

    }
    return (
        <div>

        <Form className="bg-secondary text-white m-3 rounded" noValidate onSubmit={handleSignup}>
            <div className="px-5 py-3">
                <Row className="">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        defaultValue="Email"
                        onChange={store.updateSignupForm} 
                        value={store.signupForm.email}
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
                        onChange={store.updateSignupForm} 
                        value={store.signupForm.password}
                        name="password" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                </div>
                <div className="m-2 d-flex px-3">
                <Button className="m-3 ms-auto px-" type="submit">Signup</Button>
            </div>
        </Form>
    </div>
    )
}
