import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "@/styles/pages/UserSetting.css";
import "@/styles/components/popupeeditleavetype.css";


interface Employee {
  id: number;
  leaveType: string;
  ageWork: number;
  leaveDays: number;
  sex: string;
}

const EmployeeTable: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      leaveType: "Sick Leave",
      leaveDays: 10,
      ageWork: 20,
      sex: "ชาย",
    },
    // ... ข้อมูลพนักงานเริ่มต้นอื่น ๆ
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const handleEdit = (id: number) => {
    const employee = employees.find((emp) => emp.id === id);
    if (employee) {
      setEditingEmployee(employee);
      setIsEditing(true);
    }
  };

  const handleAdd = () => {
    const newEmployee: Employee = {
      id: employees.length + 1,
      leaveType: "",
      leaveDays: 0,
      ageWork: 0,
      sex: "",
    };

    setEditingEmployee(newEmployee);
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    if (editingEmployee) {
      if (editingEmployee.id === employees.length + 1) {
        setEmployees([...employees, editingEmployee]);
      } else {
        setEmployees((prevEmployees) =>
          prevEmployees.map((emp) => (emp.id === editingEmployee.id ? editingEmployee : emp))
        );
      }
      setIsEditing(false);
    }
  };

  const handleCancelChanges = () => {
    setIsEditing(false);
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
                  <th>ลำดับ</th>
                  <th>ประเภท</th>
                  <th>อายุงาน</th>
                  <th>จำนวนวัน</th>
                  <th>เพศ</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.leaveType}</td>
                    <td>{employee.ageWork}</td>
                    <td>{employee.leaveDays}</td>
                    <td>{employee.sex}</td>
                    <td>
                      <button onClick={() => handleEdit(employee.id)}>แก้ไข</button>
                      <button onClick={handleAdd}>เพิ่มข้อมูล</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isEditing && editingEmployee && (
        <div className="popup-container">
          <div className="popup-content">
            <h2>{editingEmployee.id === employees.length + 1 ? "เพิ่มข้อมูล" : "แก้ไขข้อมูล"} Leave type</h2>
            <label>
              Leave Type:
              <input
                type="text"
                value={editingEmployee.leaveType}
                onChange={(e) => setEditingEmployee({ ...editingEmployee, leaveType: e.target.value })}
              />
            </label>
            <label>
              Leave Days:
              <input
                type="number"
                value={editingEmployee.leaveDays}
                onChange={(e) => setEditingEmployee({ ...editingEmployee, leaveDays: parseInt(e.target.value) })}
              />
            </label>
            <label>
              Age Work:
              <input
                type="number"
                value={editingEmployee.ageWork}
                onChange={(e) => setEditingEmployee({ ...editingEmployee, ageWork: parseInt(e.target.value) })}
              />
            </label>
            <label>
              Sex:
              <select
                value={editingEmployee.sex}
                onChange={(e) => setEditingEmployee({ ...editingEmployee, sex: e.target.value })}
              >
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
                <option value="อื่น ๆ">อื่น ๆ</option>
              </select>
            </label>
            <div className="popup-buttons">
              <button className="close-button" onClick={handleCancelChanges}>
                ปิด
              </button>
              <button className="saveleave-button" onClick={handleSaveChanges}>บันทึก</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;
