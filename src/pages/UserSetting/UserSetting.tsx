import React from "react";
import Navbar from "@/pages/Dashboard/Navbar";
import Sidebar from "@/pages/Dashboard/Sidebar";
import "@/styles/pages/Dashboard.css";
import "@/styles/pages/UserSetting.css";

const EmployeeTable: React.FC = () => {
  const employees = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      company: "ABC Inc.",
      yearsOfWork: 5,
      role: "Manager",
      status: "Active",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      company: "XYZ Corp.",
      yearsOfWork: 2,
      role: "Developer",
      status: "Active",
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      company: "LMN Ltd.",
      yearsOfWork: 3,
      role: "Designer",
      status: "Inactive",
    },
  ];

  // Function to handle Edit action
  const handleEdit = (id: number) => {
    // Implement the logic to handle Edit action here
    console.log(`Edit employee with ID: ${id}`);
  };

  // Function to handle View Leave action
  const handleViewLeave = (id: number) => {
    // Implement the logic to handle View Leave action here
    console.log(`View leave for employee with ID: ${id}`);
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="employee-table">
          <div className="table-card">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Company</th>
                  <th>Years of Work</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.company}</td>
                    <td>{employee.yearsOfWork}</td>
                    <td>{employee.role}</td>
                    <td>{employee.status}</td>
                    <td>
                      <button onClick={() => handleEdit(employee.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleViewLeave(employee.id)}>
                        View Leave
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
