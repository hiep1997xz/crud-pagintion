import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import EditEmployee from "./EditEmployee";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  useEffect(() => {
    closeModal();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={openModal}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            className="btn text-danger btn-act"
            data-toggle="modal"
            onClick={() => deleteEmployee(employee.id)}
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditEmployee employee={employee}/>
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

export default Employee;
