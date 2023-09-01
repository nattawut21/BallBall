import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "@/styles/components/Navbar.css";
import "@/styles/components/Sidebar.css";
import "@/styles/pages/UserSetting.css";
import CalendarView from "@/components/CalendarView";
const PubbicholidayUser: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="employee-table">
          <div className="table-card">
           
            <CalendarView></CalendarView>

            <table></table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PubbicholidayUser;
