import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Select from "react-select";
import Navbar from "@/pages/Dashboard/Navbar";
import Sidebar from "@/pages/Dashboard/Sidebar";
import "@/styles/pages/EditUser.css";
import "@/styles/components/navbar.css";
import "@/styles/components/sidebar.css";
import "@/styles/pages/UserSetting.css";
import "@/styles/components/button.css";

const EditUser: React.FC = (props) => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { state } = location;
  console.log({ state });
  const [firstname, setFirstname] = useState(state.firstName || "");
  const [lastname, setLastname] = useState(state?.lastName || "");
  const [gender, setGender] = useState(state?.gender || "");
  const [birthdate, setBirthdate] = useState(state?.birthdate || "");
  const [dateEntered, setDateEntered] = useState(state?.dateEntered || "");
  const [username, setUsername] = useState("");
  const [company, setCompany] = useState(state?.company || "");
  const [department, setDepartment] = useState(state?.department || "");
  const [position, setPosition] = useState(state?.position || "");
  const [role, setRole] = useState(state?.role || "");
  const [roleState, setRoleState] = useState(state?.role || "");
  const [approver, setApprover] = useState(
    state?.approver ? state.approver.join(", ") : ""
  );

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoleState(e.target.value);
  };

  const handleApproverChange = (
    selectedOptions: ReadonlyArray<{ value: string; label: string }>
  ) => {
    const selectedApprover = selectedOptions.map((option) => option.value);
    setApprover(selectedApprover.join(", "));
  };
  const approverOptions = [
    { value: "approver1", label: "Approver 1" },
    { value: "approver2", label: "Approver 2" },
    { value: "approver3", label: "Approver 3" },
  ];
  

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="employee-table">
          <div className="table-card">
            <h2>Edit User: {id}</h2>
            <div className="form-group">
              <label htmlFor="firstname">ชื่อจริง:</label>
              <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                readOnly={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">นามสกุล:</label>
              <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                readOnly={true}
              />
            </div>
            <div className="form-row">
              <div className="form-group-inline">
                <label htmlFor="gender">เพศ:</label>
                <input
                  type="text"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  readOnly={true}
                />
              </div>
              <div className="form-group-inline">
                <label htmlFor="birthdate">วันเกิด:</label>
                <input
                  type="text"
                  id="birthdate"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  readOnly={true}
                />
              </div>
              <div className="form-group-inline">
                <label htmlFor="dateentered">วันที่เข้าทำงาน:</label>
                <input
                  type="text"
                  id="dateentered"
                  value={dateEntered}
                  onChange={(e) => setDateEntered(e.target.value)}
                  readOnly={true}
                />
              </div>
            </div>
            <label htmlFor="username">ชื่อผู้ใช้:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              readOnly={true}
            />
            <label htmlFor="company">บริษัท:</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              readOnly={true}
            />
            <label htmlFor="department">แผนก:</label>
            <input
              type="text"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              readOnly={true}
            />
            <label htmlFor="position">ตำแหน่ง:</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              readOnly={true}
            />

            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <select
                id="role"
                value={roleState}
                onChange={handleRoleChange}
                style={{ width: "100%" }}
              >
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="approver">Approver:</label>
              <Select
                isMulti
                id="approver"
                value={approverOptions.filter((option) =>
                  approver.includes(option.value)
                )}
                onChange={handleApproverChange}
                options={approverOptions}
              />
            </div>
            <div className="button-group">
              <button className="save-button">Save</button>
              <button className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
