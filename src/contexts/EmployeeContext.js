import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Thomas",
      email: "thomas@gmail.com",
      address: "thomas1",
      phone: "012243294",
    },
    {
      id: uuidv4(),
      name: "Edison",
      email: "thomas1@gmail.com",
      address: "thomas2",
      phone: "012243294",
    },
  ]);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, []);

  const addEmployee = (name, email, address, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, email, address, phone }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const sorteEmployee = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <EmployeeContext.Provider
      value={{ sorteEmployee, addEmployee, deleteEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
