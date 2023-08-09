import React, { useState } from "react";
import "@/styles/components/Popup.css";

const Navbar: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup((prevState) => !prevState);
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <h3>Logo</h3>
        <img
          src="src/assets/Administrator.png"
          alt="Logo"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          onClick={togglePopup}
        />
      </nav>

      {showPopup && (
        <div className="popup">
          <img
            src="src/assets/Administrator.png"
            alt="Profile"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <div>
            <h4>ชื่อผู้ใช้งาน</h4>
            <p>ตำแหน่ง (role)</p>
          </div>
          <div className="logout-button">
          <button onClick={togglePopup}>ออกจากระบบ</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
