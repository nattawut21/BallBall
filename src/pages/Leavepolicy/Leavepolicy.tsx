import React, { ChangeEvent, useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "@/styles/components/Navbar.css";
import "@/styles/components/Sidebar.css";
import "@/styles/pages/Leavepolicy.css";
import jsPDF from "jspdf";
import mockupImage from "../Leavepolicy/leave.png";

const EmployeeTable: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    const contentWidth = pdf.internal.pageSize.getWidth();
    const contentHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = 100; // adjust image width as needed
    const imgHeight = (imgWidth * contentHeight) / contentWidth;

    if (selectedImage) {
      pdf.addImage(selectedImage, "JPEG", 10, 10, imgWidth, imgHeight);
    } else {
      pdf.addImage(mockupImage, "PNG", 10, 10, imgWidth, imgHeight);
    }

    pdf.save("image_to_pdf.pdf");
  };

  const imageInputRef = React.createRef<HTMLInputElement>();

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="employee-table">
          <div className="table-card">
            <div className="table-card-content">
              <div className="upload-button">
                <button onClick={handleButtonClick}>Import</button>
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </div>
              <button onClick={handleDownloadPDF}>Downlload</button>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  width="100%"
                  height="595px"
                />
              )}
              {!selectedImage && (
                <div className="mockup-image">
                  <img
                    src={mockupImage}
                    alt="Mockup"
                    width="100%"
                    height="595px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
