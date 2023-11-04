import notesStore from "../store/notesStore"

import { useState } from 'react';
import {Row, Col, Form, InputGroup, Button} from 'react-bootstrap';

export default function UpdateForm() {
    const store = notesStore();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };


    if (!store.updateForm._id) return <></>
  return (
    <div>
      <h2>Update Note</h2>
        <Form className="bg-secondary text-white m-3 rounded" noValidate validated={validated} onSubmit={store.updateNote}>
          <div className="px-5 py-3">
            <Row className="">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Title"
                  defaultValue="Title"
                  onChange={store.handleUpdateFieldChange} 
                  value={store.updateForm.title}
                  name="title"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Description"
                  defaultValue="Description"
                  onChange={store.handleUpdateFieldChange} 
                  value={store.updateForm.body}
                  name="body"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            </div>
            <div className="m-3 d-flex">
              <Form.Group className="mx-3 my-3 me-auto">
                <Form.Check
                  required
                  label="Agree to Submit"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button className="m-3" type="submit">Create Note</Button>
            </div>
        </Form> 



        {/* <form onSubmit={store.updateNote}>
        <input onChange={store.handleUpdateFieldChange} value={store.updateForm.title} name = "title" />
        <textarea onChange={store.handleUpdateFieldChange} value={store.updateForm.body} name = "body" />
        <button  type="submit">Update Note</button>
        </form> */}
    </div>
  )
}
