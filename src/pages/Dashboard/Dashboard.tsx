// นำเข้าโมดูลและคอมโพเนนต์ที่จำเป็น
import React from "react";
import Navbar from "@/pages/Dashboard/Navbar";
import Sidebar from "@/pages/Dashboard/Sidebar";
import "@/styles/pages/Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navbar />

      <Sidebar />

      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Dashboard;
