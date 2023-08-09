import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/pages/Dashboard/Navbar";
import Sidebar from "@/pages/Dashboard/Sidebar";
import "@/styles/components/Navbar.css";
import "@/styles/components/Sidebar.css";
import "@/styles/components/Popupadd.css";
import "@/styles/pages/UserSetting.css";
import { Button } from "@/components/public/base";
import Popup from "./addPublicholiday";
import EditPopup from "./editPublicholiday";

const PublicHoliday: React.FC = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      date: new Date(),
      description: "วันปีใหม่",
      status: "Active",
    },
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState({
    id: 0,
    date: new Date(),
    description: "วันปีใหม่",
    status: "Active",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedEmployee.id === 0) {
      setEmployees([...employees, selectedEmployee]);
    } else {
      const updatedEmployees = employees.map((employee) =>
        employee.id === selectedEmployee.id ? selectedEmployee : employee
      );
      setEmployees(updatedEmployees);
    }

    setShowPopup(false);

    setSelectedEmployee({
      id: 0,
      date: new Date(),
      description: "",
      status: "",
    });
  };

  const handleEditSave = (editedEmployee: any) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === editedEmployee.id ? editedEmployee : employee
    );
    setEmployees(updatedEmployees);

    setShowEditPopup(false);

    setSelectedEmployee({
      id: 0,
      date: new Date(),
      description: "",
      status: "",
    });
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="employee-table">
          <div className="table-card">
            <h2>ปี2566 </h2>
            <div className="button-group ">
              <button className="import-button">import</button>
              <button className="add-button" onClick={() => setShowPopup(true)}>
                ADD
              </button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.date.toDateString()}</td>
                    <td>{employee.description}</td>
                    <td>{employee.status}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setShowEditPopup(true);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showPopup && (
        <Popup
          selectedEmployee={selectedEmployee}
          setShowPopup={setShowPopup}
          setSelectedEmployee={setSelectedEmployee}
          handleSave={handleSave}
        />
      )}
      {showEditPopup && (
        <EditPopup
          selectedEmployee={selectedEmployee}
          setShowEditPopup={setShowEditPopup}
          handleEditSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default PublicHoliday;
