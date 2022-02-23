import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';

const EditEmployee = ({ employee }) => {
  const id = employee.id;
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const {updateEmployee} = useContext(EmployeeContext);

  const updatedEmployee = {id, name, email, address, phone};

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control
          as="textarea"
          placeholder="Address"
          name="address"
          value={address}
           onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: 15 }}>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
           onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Button
        className="btn btn-success"
        type="submit"
        style={{ width: "100%" }}
        block
      >
        Update Employee
      </Button>
    </Form>
  );
};

export default EditEmployee;
