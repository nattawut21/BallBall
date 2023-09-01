import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "@/styles/components/navbar.css";
import "@/styles/components/sidebar.css";
import "@/styles/components/popupadd.css";
import "@/styles/pages/userSetting.css";

import Popup from "./addreviewworktime";
import EditPopup from "./editreviewworktime";
import { Link } from "react-router-dom";

const Reviewworktime: React.FC = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      Approver: "สมฤดี",
      date: new Date(),
      Reason: "รถติด",
      Status: "pending",
      typeinfrom: "ประเภทการลา",
    },
  ]);
  const handleDelete = (id: number) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const [selectedEmployee, setSelectedEmployee] = useState({
    id: 1,
    Approver: "สมฤดี",
    date: new Date(),
    Reason: "รถติด",
    Status: "pending",
    typeinfrom: "ประเภทการลา",
  });
  const [nextId, setNextId] = useState(2); // กำหนดค่าเริ่มต้นของ id ที่สูงสุดที่ใช้แล้ว
  const [showPopup, setShowPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmployee = {
      id: nextId, // ใช้ค่า id ที่ถูกกำหนดล่วงหน้า
      date: selectedEmployee.date,
      Approver: selectedEmployee.Approver,
      Reason: selectedEmployee.Reason,
      Status: selectedEmployee.Status,
      typeinfrom: selectedEmployee.typeinfrom,
    };

    setEmployees([...employees, newEmployee]);
    setNextId(nextId + 1); // เพิ่มค่า id ที่สูงสุดที่ใช้แล้วทีละ 1
    setShowPopup(false);

    setSelectedEmployee({
      id: 0,
      Approver: "",
      date: new Date(),
      Reason: "รถติด",
      Status: "",
      typeinfrom: "",
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
      Approver: "",
      date: new Date(),
      Reason: "",
      Status: "",
      typeinfrom: "",
    });
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="employee-table">
          <div className="table-card">
            <h2>ปรับปรุงเวลางาน</h2>
            <div className="button-group">
             
              <button className="add-button" onClick={() => setShowPopup(true)}>
                Add Review
              </button>
            
            
            </div>

            <table>
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>Approver</th>
                  <th>Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.Approver}</td>
                    <td>{employee.date.toDateString()}</td>
                    <td>{employee.Reason}</td>
                    <td>{employee.Status}</td>
                    <td>
                    
                      <button
                        className="cancel-button"
                        onClick={() => {
                          const confirmed = window.confirm("ยกเลิก หรือไม่");
                          if (confirmed) {
                            handleDelete(employee.id); 
                          }
                        }}
                      >
                        ยกเลิก
                      </button>
                      <button className="editreviewworktime" onClick={() => setShowEditPopup(true)}>
                        edit
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

export default Reviewworktime;
