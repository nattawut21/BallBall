// นำเข้าโมดูลและคอมโพเนนต์ที่จำเป็น
import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar"
import "@/styles/pages/Dashboard.css";

const dashboard: React.FC = () => {
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

export default dashboard;
