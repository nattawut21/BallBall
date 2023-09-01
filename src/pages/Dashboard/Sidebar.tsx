import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside>
      <div className="sidebar-item">Dashboard</div>
      <Link to="/user-setting">
        <div className="sidebar-item">UserSetting</div>
      </Link>
      <Link to="/user-setting">
      <div className="sidebar-item">TypeLeave</div>
      </Link>
      <Link to="/publicholiday">
      <div className="sidebar-item">Puilc Holiday</div>
      </Link>
      <div className="sidebar-item">Time In</div>
      <div className="sidebar-item">Leave Policy</div>
      <Link to="/report">
      <div className="sidebar-item">Report</div>
      </Link>
      
    </aside>
  );
};

export default Sidebar;
