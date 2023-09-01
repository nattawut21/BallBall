import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface EditPopupProps {
  selectedRequest: {
    id: number;
    approver: string;
    type: string;
    startDate: Date;
    endDate: Date;
    duration: string;
    period: string;
    status: string;
  };
  setShowEditPopup: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditSave: (editedRequest: {
    id: number;
    approver: string;
    type: string;
    startDate: Date;
    endDate: Date;
    duration: string;
    period: string;
    status: string;
  }) => void;
}

const EditPopup: React.FC<EditPopupProps> = ({
  selectedRequest,
  setShowEditPopup,
  handleEditSave,
}) => {
  const [editedRequest, setEditedRequest] = useState(selectedRequest);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Call the handleEditSave function and pass the editedRequest data
    handleEditSave(editedRequest);

    // Close the EditPopup
    setShowEditPopup(false);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Edit Leave </h3>
        <form onSubmit={handleSubmit}>
          <label>Approver:</label>
          <input
            type="text"
            placeholder="Approver"
            value={editedRequest.approver}
            onChange={(e) =>
              setEditedRequest({
                ...editedRequest,
                approver: e.target.value,
              })
            }
          />

          <label>Type:</label>
          <input
            type="text"
            placeholder="Type"
            value={editedRequest.type}
            onChange={(e) =>
              setEditedRequest({
                ...editedRequest,
                type: e.target.value,
              })
            }
          />

          <label>Start Date:</label>
          <DatePicker
            selected={editedRequest.startDate}
            onChange={(date) =>
              setEditedRequest({
                ...editedRequest,
                startDate: date || new Date(),
              })
            }
          />

          <label>End Date:</label>
          <DatePicker
            selected={editedRequest.endDate}
            onChange={(date) =>
              setEditedRequest({
                ...editedRequest,
                endDate: date || new Date(),
              })
            }
          />

          <label>Duration:</label>
          <input
            type="text"
            placeholder="Duration"
            value={editedRequest.duration}
            onChange={(e) =>
              setEditedRequest({
                ...editedRequest,
                duration: e.target.value,
              })
            }
          />

          <label>Period:</label>
          <input
            type="text"
            placeholder="Period"
            value={editedRequest.period}
            onChange={(e) =>
              setEditedRequest({
                ...editedRequest,
                period: e.target.value,
              })
            }
          />

          <label>Status:</label>
          <input
            type="text"
            placeholder="Status"
            value={editedRequest.status}
            onChange={(e) =>
              setEditedRequest({
                ...editedRequest,
                status: e.target.value,
              })
            }
          />

          <div className="button-group">
            <button type="submit">Save Changes</button>
            <button className="close-button" onClick={() => setShowEditPopup(false)}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
