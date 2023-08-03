import React from "react";
import Navbar from "@/pages/Dashboard/Navbar";
import Sidebar from "@/pages/Dashboard/Sidebar";
import "@/styles/pages/Dashboard.css";

const EmployeeTable: React.FC = () => {

  const employees = [
    { id: 1, name: "John Doe", position: "Manager" },
    { id: 2, name: "Jane Smith", position: "Developer" },
    { id: 3, name: "Bob Johnson", position: "Designer" },
  
  ];

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="employee-table">
        <h2>Employee Table</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;