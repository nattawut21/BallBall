import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface EditPopupProps {
  selectedEmployee: {
    id: number;
    Approver: string;
    date: Date;
    Reason: string;
    Status: string;
    typeinfrom: string;
  };
  setShowEditPopup: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditSave: (editedEmployee: {
    id: number;
    Approver: string;
    date: Date;
    Reason: string;
    Status: string;
    typeinfrom: string;
  }) => void;
}

const EditPopup: React.FC<EditPopupProps> = ({
  selectedEmployee,
  setShowEditPopup,
  handleEditSave,
}) => {
  const [editedEmployee, setEditedEmployee] = useState(selectedEmployee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Call the handleEditSave function and pass the editedEmployee data
    handleEditSave(editedEmployee);

    // Close the EditPopup
    setShowEditPopup(false);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>แก้ ปรับปรุงเวลางาน</h3>
        <form onSubmit={handleSubmit}>
     
        <input
            type="text"
            placeholder="ประเภท"
            value={"แจ้งปรับปรุงเวลางาน"}
            readOnly
          />
          <label>Date:</label>
          <DatePicker
            selected={editedEmployee.date}
            onChange={(date) =>
              setEditedEmployee({
                ...editedEmployee,
                date: date || new Date(),
              })
            }
          />
        
          <label>เหตุผล:</label>
          <input
            type="text"
            placeholder="เหตุผล"
            value={editedEmployee.Reason}
            onChange={(e) =>
              setEditedEmployee({
                ...editedEmployee,
                Reason: e.target.value,
              })
            }
          />
     <label>Approver:</label>
          <select
            value={selectedEmployee.Approver}
            onChange={(e) =>
              setEditedEmployee({
                ...selectedEmployee,
                Approver: e.target.value,
              })
            }
          >
            <option value="สมฤดี">สมฤดี</option>
            <option value="มิโกะ">มิโกะ</option>
            
          </select>
          <button type="submit">Save Changes</button>
        </form>
        <button
          className="close-button"
          onClick={() => setShowEditPopup(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditPopup;
