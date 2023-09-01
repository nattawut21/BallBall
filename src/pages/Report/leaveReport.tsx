import React, { useState } from "react";
import Select from "react-select";
import Navbar from "@/pages/Dashboard/Navbar";
import Sidebar from "@/pages/Dashboard/Sidebar";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "@/styles/components/Sidebar.css";
import "@/styles/components/Popupadd.css";
import "@/styles/pages/UserSetting.css";
import "@/styles/components/link.css";

const Leavereport: React.FC = () => {
  const [employees] = useState([
    {
      id: 1,
      name: "สมฤดี หยิบยก",
      company: "ทำงานนอกสถานที่",
      departments: "ประชุม Reviews Product",
      approver: "09/06/2566",
      leavetype: "ทำงานนอกสถานที่",
      startdate: "09/06/2566",
      finishdate: "09/06/2566",
      days: "ทำงานนอกสถานที่",
      time: "วันเต็ม",
      status: "Action",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]); // Define selectedOptions
  const options = employees.map((employee) => ({
    value: employee.id,
    label: `${employee.name} `,
    company: `${employee.company} `,
  }));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (selectedOptions: any) => {
    setSelectedOptions(selectedOptions);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      (selectedOptions.length === 0 ||
        selectedOptions.some((option) => option.value === employee.id)) &&
      (employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.departments
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        employee.approver.includes(searchQuery) ||
        employee.leavetype.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.startdate.includes(searchQuery) ||
        (employee.finishdate && employee.finishdate.includes(searchQuery)) || // Null check for Finishdate
        employee.days.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (employee.time &&
          employee.time.toLowerCase().includes(searchQuery.toLowerCase())) || // Null check for Time
        employee.status.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleExcelExport = () => {
    const workbook = XLSX.utils.book_new();
    const sheetData = [
      [
        "ID",
        "Name",
        "Company",
        "Departments",
        "Approver",
        "Leave Type",
        "Start Date",
        "Finish Date",
        "Days",
        "Time",
        "Status",
      ],
      ...filteredEmployees.map((employee) => [
        employee.id,
        employee.name,
        employee.company,
        employee.departments,
        employee.approver,
        employee.id,
        employee.name,
        employee.leavetype,
        employee.startdate,
        employee.finishdate,
        employee.days,
        employee.time,
        employee.status,
      ]),
    ];
    const sheet = XLSX.utils.aoa_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(workbook, sheet, "Employee Report");

    // Generate the Excel file
    XLSX.writeFile(workbook, "employee_report.xlsx");
  };

  const handlePdfExport = () => {
    const doc = new jsPDF(); // เปลี่ยนการสร้าง instance
    const tableData = filteredEmployees.map((employee) => [
      employee.id.toString(),
      employee.name,
      employee.company,
      employee.departments,
      employee.approver,
      employee.id,
      employee.name,
      employee.leavetype,
      employee.startdate,
      employee.finishdate,
      employee.days,
      employee.time,
      employee.status,
    ]);
    tableData.unshift([
      "ID",
      "Name",
      "Company",
      "Departments",
      "Approver",
      "Leave Type",
      "Start Date",
      "Finish Date",
      "Days",
      "Time",
      "Status",
    ]);

    // ใช้ jspdf-autotable เพื่อสร้างตารางใน PDF
    // doc.autoTable({
    //   head: [tableData[0]],
    //   body: tableData.slice(1),
    // });

    // บันทึกเอกสารเป็นไฟล์ PDF
    doc.save("employee_report.pdf");
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="employee-table">
          <div className="table-card">
            <div className="cards">
              <a className="nav-link" href="/report">
                Inform
              </a>
              <a className="nav-link" href="/receivedleave">
                รายงานวันลาที่ได้รับ
              </a>
              <a className="nav-link" href="/leavereport">
                Leave Report
              </a>
              <a className="nav-link" href="/adjustreport">
                Adjust Report
              </a>
            </div>
            <div className="button-group">
              <button className="import-button" onClick={handleExcelExport}>
                Excel
              </button>
              <button className="add-button" onClick={handlePdfExport}>
                PDF
              </button>
            </div>
            <div className="selects">
              <Select
                placeholder="ค้นหาตามชื่อหรือประเภท"
                value={selectedOptions}
                options={options}
                onChange={handleSelectChange}
                isMulti
                isClearable
              />
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Departments</th>
                  <th>Approver</th>
                  <th>Leave Type</th>
                  <th>Start Date</th>
                  <th>Finish Date</th>
                  <th>Days</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.company}</td>
                    <td>{employee.departments}</td>
                    <td>{employee.approver}</td>
                    <td>{employee.leavetype}</td>
                    <td>{employee.startdate}</td>
                    <td>{employee.finishdate}</td>
                    <td>{employee.days}</td>
                    <td>{employee.time}</td>
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

export default Leavereport;
