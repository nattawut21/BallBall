import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface PopupProps {
  selectedEmployee: {
    id: number;
    date: Date;
    description: string;
    status: string;
  };
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<{
      id: number;
      date: Date;
      description: string;
      status: string;
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
        <h3>Add Public Holiday</h3>
        <form onSubmit={handleSave}>
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

          <label>Department:</label>
          <input
            type="text"
            placeholder="Department"
            value={selectedEmployee.description}
            onChange={(e) =>
              setSelectedEmployee({
                ...selectedEmployee,
                description: e.target.value,
              })
            }
          />
          <label>Status:</label>
          <input
            type="text"
            placeholder="Status"
            value={selectedEmployee.status}
            onChange={(e) =>
              setSelectedEmployee({
                ...selectedEmployee,
                status: e.target.value,
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