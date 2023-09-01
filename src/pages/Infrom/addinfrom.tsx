import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface PopupProps {
  selectedEmployee: {
    id: number;
    date: Date;
    description: string;
    typeinfrom: string;
  };
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<{
      id: number;
      date: Date;
      description: string;
      typeinfrom: string;
    }>
  >;
  handleSave: (e: React.FormEvent) => void;
}


const Popup: React.FC<PopupProps> = ({
  selectedEmployee,
  setShowPopup,
  setSelectedEmployee,
  handleSave,
}) => {
  
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Add Information</h3>
        <form onSubmit={handleSave}>
          <label>Type:</label>
          <select
            value={selectedEmployee.typeinfrom}
            onChange={(e) =>
              setSelectedEmployee({
                ...selectedEmployee,
                typeinfrom: e.target.value,
              })
            }
          >
            <option value="มาสาย">มาสาย</option>
            <option value="ทำงานนอกสถานที่">ทำงานนอกสถานที่</option>
            <option value="อึ่นๆ">อึ่นๆ</option>
          </select>

          <label>Date:</label>
          <DatePicker
            selected={selectedEmployee.date}
            onChange={(date) =>
              setSelectedEmployee({
                ...selectedEmployee,
                date: date || new Date(),
              })
            }
          />
          <label>คำอธิบาย:</label>
          <input
            type="text"
            placeholder="คำอธิบาย"
            value={selectedEmployee.description}
            onChange={(e) =>
              setSelectedEmployee({
                ...selectedEmployee,
                description: e.target.value,
              })
            }
          />

          <button type="submit">Submit</button>
        </form>
        <button className="close-button" onClick={() => setShowPopup(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
