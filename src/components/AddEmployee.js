import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddEmployee = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, email, address, phone } = newEmployee;

  const handleChange = (e) => {
    setNewEmployee({...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control
          as="textarea"
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => handleChange(e)}
        />
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
