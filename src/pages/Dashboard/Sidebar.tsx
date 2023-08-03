import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside style={{ height: "100vh" }}>
      <div className="sidebar-item">Dashboard</div>
      <Link to="/user-setting">
        <div className="sidebar-item">UserSetting</div>
      </Link>
      <div className="sidebar-item">TypeLeave</div>
      <div className="sidebar-item">Puilc Holiday</div>
      <div className="sidebar-item">Time In</div>
      <div className="sidebar-item">Leave Policy</div>
      <div className="sidebar-item">Report</div>
    </aside>
  );
};

export default Sidebar;
