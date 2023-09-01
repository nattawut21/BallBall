import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "@/styles/components/navbar.css";
import "@/styles/components/sidebar.css";
import "@/styles/components/popupadd.css";
import "@/styles/pages/userSetting.css";

import ImageToPdfConverter from "@/components/ImageToPdfConverter";
import logo from "./leave.jpg";

const LeavePolicy: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />

        <div className="employee-table">
          <div className="table-card">
            <ImageToPdfConverter initialImage={logo} />
            <table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavePolicy;
