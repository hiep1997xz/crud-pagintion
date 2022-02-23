import React from "react";
import { Button, Form } from "react-bootstrap";

const AddEmployee = () => {
  return (
    <Form>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control type="text" placeholder="Name" name="name" />
      </Form.Group>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control type="email" placeholder="Email" name="email" />
      </Form.Group>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control as="textarea" placeholder="Address" name="address" />
      </Form.Group>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control type="text" placeholder="Phone" name="phone" />
      </Form.Group>
      <Button
        className="btn btn-success"
        type="submit"
        style={{ width: "100%" }}
        block
      >
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddEmployee;
