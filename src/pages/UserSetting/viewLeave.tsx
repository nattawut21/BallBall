import React from "react";
import { Link } from "react-router-dom";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

import "@/styles/pages/UserSetting.css";

interface Employee {
  id: number;
  order: number;
  leaveType: string;
  leaveDays: number;
  remainingDays: number;
  balance: number;
}

const EmployeeTable: React.FC = () => {
  const employees: Employee[] = [
    {
      id: 1,
      order: 1,
      leaveType: "Sick Leave",
      leaveDays: 10,
      remainingDays: 5,
      balance: 5
    },
    {
      id: 2,
      order: 2,
      leaveType: "Vacation",
      leaveDays: 15,
      remainingDays: 8,
      balance: 10
    },
    {
      id: 3,
      order: 3,
      leaveType: "Personal Leave",
      leaveDays: 7,
      remainingDays: 3,
      balance: 10
    },
  ];

  const handleEdit = (id: number) => {
    console.log(`Edit employee with ID: ${id}`);
  };

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
            <h1>สมฤดี หยิบยก</h1>
            <table>
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>ประเภทวันลา</th>
                  <th>วันลาที่ได้รับ</th>
                  <th>วันที่ลาแล้ว</th>
                  <th>คงเหลือ</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.order}</td>
                    <td>{employee.leaveType}</td>
                    <td>{employee.leaveDays}</td>
                    <td>{employee.remainingDays}</td>
                    <td>{employee.balance}</td>
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
