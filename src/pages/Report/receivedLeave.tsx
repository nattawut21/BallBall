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

const Receivedleave: React.FC = () => {
  const [employees] = useState([
    {
      id: 1,
      name: "สมฤดี หยิบยก",
      type: "ทำงานนอกสถานที่",
      details: "ประชุม Reviews Product",
      date: "09/06/2566",
    },
    {
      id: 2,
      name: "บอล",
      type: "ทำงานนอกสถานที่",
      details: "ประชุม Reviews Product",
      date: "09/06/2566",
    },
    {
      id: 3,
      name: "โอม",
      type: "นอน",
      details: "นอน",
      date: "09/06/2566",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]); // Define selectedOptions
  const options = employees.map((employee) => ({
    value: employee.id,
    label: `${employee.name} - ${employee.type}`,
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
        employee.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.date.includes(searchQuery))
  );

  const handleExcelExport = () => {
    const workbook = XLSX.utils.book_new();
    const sheetData = [
      ["ON", "Name", "Type", "Details", "Date"],
      ...filteredEmployees.map((employee) => [
        employee.id,
        employee.name,
        employee.type,
        employee.details,
        employee.date,
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
      employee.type,
      employee.details,
      employee.date,
    ]);
    tableData.unshift(["ON", "Name", "Type", "Details", "Date"]);

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
                  <th>ON</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Details</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.type}</td>
                    <td>{employee.details}</td>
                    <td>{employee.date}</td>
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

export default Receivedleave;
