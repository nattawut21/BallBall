import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar"
import "@/styles/components/Navbar.css";
import "@/styles/components/Sidebar.css";
import "@/styles/pages/Report.css";

import * as XLSX from "xlsx";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  annualLeave: string;
  casualLeave: string;
  sickLeave: string;
  maternityLeave: string;
  monasticLeave: string;
  parentalLeave: string;
  company: string;
  department: string;
  approver: string;
  leaveType: string;
  startDate: string;
  finishDate: string;
  duration: string;
  days: string;
  status: string;
}

const EmployeeTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const employees: Employee[] = [
    {
      id: 1,
      firstName: "somrudee",
      lastName: "Yibyok",
      annualLeave: "10",
      casualLeave: "50",
      sickLeave: "90",
      maternityLeave: "999",
      monasticLeave: "999",
      parentalLeave: "999",
      company: "ACME Corp",
      department: "HR",
      approver: "John Doe",
      leaveType: "Annual Leave",
      startDate: "2023-08-10",
      finishDate: "2023-08-12",
      days: "3",
      duration: "3 days",
      status: "Approved",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      annualLeave: "15",
      casualLeave: "40",
      sickLeave: "70",
      maternityLeave: "0",
      monasticLeave: "0",
      parentalLeave: "0",
      company: "XYZ Ltd",
      department: "Finance",
      approver: "Jane Smith",
      leaveType: "Sick Leave",
      startDate: "2023-08-15",
      finishDate: "2023-08-17",
      days: "3",
      duration: "3 days",
      status: "Pending",
    },
    {
      id: 3,
      firstName: "Jane",
      lastName: "Smith",
      annualLeave: "12",
      casualLeave: "48",
      sickLeave: "60",
      maternityLeave: "0",
      monasticLeave: "0",
      parentalLeave: "2",
      company: "ABC Inc",
      department: "Marketing",
      approver: "Alex Johnson",
      leaveType: "Casual Leave",
      startDate: "2023-08-20",
      finishDate: "2023-08-22",
      days: "3",
      duration: "3 days",
      status: "Rejected",
    },
  ];
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  const handleExportExcel = () => {
    const filteredData = filteredEmployees.map((employee) => ({
      ลำดับ: employee.id,
      ชื่อ: `${employee.firstName} ${employee.lastName}`,
      บริษัท: employee.company,
      แผนก: employee.department,
      approver: employee.approver,
      leavetype: employee.leaveType,
      startDate: employee.startDate,
      finishDate: employee.finishDate,
      day: employee.days,
      ระยะเวลา: employee.duration,
      status: employee.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ข้อมูลพนักงาน");

    XLSX.writeFile(workbook, "ข้อมูลพนักงาน.xlsx");
  };

  const filteredEmployees = employees.filter((employee) =>
    `${employee.firstName} ${employee.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="employee-table">
          <div className="table-card">
          <div className="button-group">
            <div className="table-search">
              <input
                type="text"
                placeholder="ค้นหาชื่อพนักงาน"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button>PDF</button>
              <button onClick={handleExportExcel}>ส่งออกเป็น Excel</button>
            </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>ชื่อ</th>
                  <th>บริษัท</th>
                  <th>แผนก</th>
                  <th>approver</th>
                  <th>leavetype</th>
                  <th>StartDate</th>
                  <th>Finish Date</th>
                  <th>Day</th>
                  <th>ระยะเวลา</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{`${employee.firstName} ${employee.lastName}`}</td>
                    <td>{employee.company}</td>
                    <td>{employee.department}</td>
                    <td>{employee.approver}</td>
                    <td>{employee.leaveType}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.finishDate}</td>
                    <td>{employee.days}</td>
                    <td>{employee.duration}</td>
                    <td>{employee.status}</td>
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
