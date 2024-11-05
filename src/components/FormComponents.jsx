import React, { useState } from "react";
import { Form } from "react-bootstrap";

const FormComponents = () => {
  const [formValue, setFormValue] = useState({
    name: "Cristian Prieto",
    email: "c@example.com",
    message: "Hola Soy Programador",
  });

 /** console.log("formValue", formValue) */
  return (
    <Form className="title">

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombressss</Form.Label>
        <Form.Control
          type="text"
          placeholder="Indique Nombre"
          value={formValue.name}
          onChange={(e) => { setFormValue({...formValue, name: e.target.value}) }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={formValue.email}
          onChange={(e) => { setFormValue({...formValue, email: e.target.value}) }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control 
          as="textarea"
          rows={4}
          value={formValue.message}
          onChange={(e) => { setFormValue({...formValue, message: e.target.value}) }} />
      </Form.Group>
    </Form>
  );
};

export default FormComponents;
