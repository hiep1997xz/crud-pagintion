import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import AddEmployee from "./AddEmployee";
import Employee from "./Employee";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const { sorteEmployee } = useContext(EmployeeContext);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    closeModal();
    return () => handleShowAlert();
  }, [sorteEmployee]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [employeePerPage] = useState(5);

  const indexOfLastEmployee = currentPage * employeePerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
  const currentEmployee = sorteEmployee.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const totalPageNumber = Math.ceil(sorteEmployee.length / employeePerPage);

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
      <Alert variant="success" show={showAlert}>
        Employee List Update Successfully!
      </Alert>
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
          {currentEmployee.map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        setCurrentPage={setCurrentPage}
        currentEmployee={currentEmployee}
        totalPageNumber={totalPageNumber}
        sorteEmployee={sorteEmployee}
      />

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEmployee />
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
