import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "@/styles/components/Navbar.css";
import "@/styles/components/Sidebar.css";
import "@/styles/pages/UserSetting.css";

const EmployeeTable: React.FC = () => {
  const employees = [
    {
      id: 1,
      firstName: "Somrudee",
      lastName: "Yibyok",
      company: "Bluesea",
      yearsOfWork: "10 years 6 months",
      role: "Manager",
      status: "Active",
    },
  ];

  const handleViewLeave = (id: number) => {
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
                  <th>ชือ</th>
                  <th>นามสกุล</th>
                  <th>บริษัท</th>
                  <th>อายุงาน</th>
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
                      <Link
                        state={{
                          id: 1,
                          firstName: "Somrudee",
                          lastName: "Yibyok",
                          company: "Bluesea",
                          yearsOfWork: "10 years 6 months",
                          role: "Manager",
                          status: "Active",
                        }}
                        to="/user-edit"
                        className="edit-button"
                      >
                        Edit
                      </Link>
                      <button onClick={() => handleViewLeave(employee.id)}>
                        <Link to={`/ViewLeave/`}>
                          View Leave
                        </Link>
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
