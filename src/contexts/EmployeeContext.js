import { createContext, useState } from "react";
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

  const sorteEmployee = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <EmployeeContext.Provider value={{ sorteEmployee }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
