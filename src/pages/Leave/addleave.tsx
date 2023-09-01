import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "@/styles/components/navbar.css";
import "@/styles/components/sidebar.css";
import "@/styles/components/popupadd.css";
import "@/styles/pages/userSetting.css";

import Popup from "./createleave";

// ปรับชื่อคอมโพเนนต์เป็น Leave
const Leave: React.FC = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 0,
      approver: "Somrudee",
      type: "ป่วย",
      startDate: new Date(),
      endDate: new Date(),
      duration: "จำนวนวัน",
      period: "8 วัน",
      status: "สถานะ",
    
    },
  ]);
  const [selectedRequest, setSelectedRequest] = useState({
    id: 0,
    approver: "",
    type: "",
    startDate: new Date(),
    endDate: new Date(),
    duration: "",
    period: "",
    status: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedRequest.id === 0) {
      setLeaveRequests([...leaveRequests, selectedRequest]);
    } else {
      const updatedRequests = leaveRequests.map((request) =>
        request.id === selectedRequest.id ? selectedRequest : request
      );
      setLeaveRequests(updatedRequests);
    }

    setShowPopup(false);

    setSelectedRequest({
      id: 0,
      approver: "",
      type: "",
      startDate: new Date(),
      endDate: new Date(),
      duration: "",
      period: "",
      status: "",
    });
  };

  const handleEditSave = (editedRequest: any) => {
    const updatedRequests = leaveRequests.map((request) =>
      request.id === editedRequest.id ? editedRequest : request
    );
    setLeaveRequests(updatedRequests);

    setShowEditPopup(false);

    setSelectedRequest({
      id: 0,
      approver: "Somrudee",
      type: "ลาป่วย",
      startDate: new Date(),
      endDate: new Date(),
      duration: "ครึ้งวัน",
      period: "",
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
            <h2>Leave Requests</h2>
            <div className="button-group">
       
              <button className="add-button" onClick={() => setShowPopup(true)}>
                สร้างใบลา
              </button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>ผู้อนุมัติ</th>
                  <th>ประเภท</th>
                  <th>วันที่เริ่ม</th>
                  <th>วันที่สิ้นสุด</th>
                  <th>จำนวนวัน</th>
                  <th>ระยะเวลา</th>
                  <th>สถานะ</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.approver}</td>
                    <td>{request.type}</td>
                    <td>{request.startDate.toDateString()}</td>
                    <td>{request.endDate.toDateString()}</td>
                    <td>{request.duration}</td>
                    <td>{request.period}</td>
                    <td>{request.status}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => {
                          setSelectedRequest(request);
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
          selectedRequest={selectedRequest}
          setShowPopup={setShowPopup}
          setSelectedRequest={setSelectedRequest}
          handleSave={handleSave}
        />
      )}
    
    
    </div>
  );
};

export default Leave;
