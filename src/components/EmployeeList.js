import React, { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";

const EmployeeList = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employee</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              className="btn btn-success"
              data-toggle="modal"
              onClick={openModal}
            >
              <i className="material-icons">&#xE147;</i>
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <Alert variant="success">Employee List Update Successfully!</Alert>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Actions</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Actions</td>
          </tr>
        </tbody>
      </table>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>abc</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={closeModal}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
