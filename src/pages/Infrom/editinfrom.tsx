import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface EditPopupProps {
  selectedEmployee: {
    id: number;
    date: Date;
    description: string;
    typeinfrom: string
  };
  setShowEditPopup: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditSave: (editedEmployee: {
    id: number;
    date: Date;
    description: string;
    typeinfrom: string
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
        <h3>Edit Public Holiday</h3>
        <form onSubmit={handleSubmit}>
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

          <label>Department:</label>
          <input
            type="text"
            placeholder="Department"
            value={editedEmployee.description}
            onChange={(e) =>
              setEditedEmployee({
                ...editedEmployee,
                description: e.target.value,
              })
            }
          />
          <label>Status:</label>
          <input
            type="text"
            placeholder="Status"
            value={editedEmployee.typeinfrom}
            onChange={(e) =>
              setEditedEmployee({
                ...editedEmployee,
                typeinfrom: e.target.value,
              })
            }
          />
          <button type="submit">Save Changes</button>
        </form>
        <button className="close-button" onClick={() => setShowEditPopup(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EditPopup;
