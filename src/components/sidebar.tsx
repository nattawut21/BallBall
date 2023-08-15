import React from "react";
import { Link } from "react-router-dom";

const sidebar: React.FC = () => {
  return (
    <aside>
      <div className="sidebar-item">Dashboard</div>
      <Link to="/user-setting">
        <div className="sidebar-item">UserSetting</div>
      </Link>
      <Link to="/leavetype">
        <div className="sidebar-item">TypeLeave</div>
      </Link>
      <Link to="/publicholiday">
        <div className="sidebar-item">PublicHoliday</div>
      </Link>
      <div className="sidebar-item">TimeIn</div>
      <Link to="/leavepolicy">
        <div className="sidebar-item">LeavePolicy</div>
      </Link>
      <Link to="/report">
        <div className="sidebar-item">Report</div>
      </Link>
    </aside>
  );
};

export default sidebar;
