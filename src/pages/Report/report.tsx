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
  leaveBirthday: string;
}

const EmployeeTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const employees: Employee[] = [
    {
      id: 1,
      firstName: "somrudee",
      lastName: "Yib4yok",
      annualLeave: "10",
      casualLeave: "50",
      sickLeave: "90",
      maternityLeave: "999",
      monasticLeave: "999",
      parentalLeave: "999",
      leaveBirthday: "1",
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
      leaveBirthday: "1",
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
      leaveBirthday: "1",
    },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    `${employee.firstName} ${employee.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleExportExcel = () => {
    const filteredData = filteredEmployees.map((employee) => ({
      ลำดับ: employee.id,
      ชื่อ: `${employee.firstName} ${employee.lastName}`,
      ลาพักร้อน: employee.annualLeave,
      ลากิจ: employee.casualLeave,
      ลาป่วย: employee.sickLeave,
      ลาคลอด: employee.maternityLeave,
      ลาบวช: employee.monasticLeave,
      ลาวันเกิด: employee.leaveBirthday,
    }));

    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ข้อมูลพนักงาน");

    XLSX.writeFile(workbook, "ข้อมูลพนักงาน.xlsx");
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="employee-table">
          <div className="table-card">
            <div className="table-navlink">
              <div className="cardlink">
                <a className="nav-link" href="/received">
                  Inform
                </a>
              </div>
              <div className="cardlink">
                <a className="nav-link" href="/received">
                  วันลาที่ได้รับ
                </a>
              </div>
              <div className="cardlink">
                <a className="nav-link" href="/received">
                  Leave report
                </a>
              </div>
              <div className="cardlink">
                <a className="nav-link" href="/received">
                  Ajust report
                </a>
              </div>
            </div>

            <div className="table-search">
              <input
                type="text"
                placeholder="ค้นหาชื่อพนักงาน"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button onClick={handleExportExcel}>ส่งออกเป็น Excel</button>
              <button>PDF</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>ชื่อ</th>
                  <th>ลาพักร้อน</th>
                  <th>ลากิจ</th>
                  <th>ลาป่วย</th>
                  <th>ลาวันเกิด</th>
                  <th>ลาบวช</th>
                  <th>ลาคลอด</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{`${employee.firstName} ${employee.lastName}`}</td>
                    <td>{employee.annualLeave}</td>
                    <td>{employee.casualLeave}</td>
                    <td>{employee.sickLeave}</td>
                    <td>{employee.leaveBirthday}</td>
                    <td>{employee.maternityLeave}</td>
                    <td>{employee.monasticLeave}</td>
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
