import React, { ChangeEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CreateLeavePopupProps {
  selectedRequest: {
    id: number;
    approver: string;
    type: string;
    startDate: Date;
    endDate: Date;
    duration: string;
    period: string;
    status: string;
    attachedFile?: File; 
  };
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedRequest: React.Dispatch<
    React.SetStateAction<{
      id: number;
      approver: string;
      type: string;
      startDate: Date;
      endDate: Date;
      duration: string;
      period: string;
      status: string;
      attachedFile?: File;
    }>
  >;
  handleSave: (e: React.FormEvent) => void;
}

const CreateLeavePopup: React.FC<CreateLeavePopupProps> = ({
  selectedRequest,
  setShowPopup,
  setSelectedRequest,
  handleSave,
}) => {
  if (selectedRequest.attachedFile) {
    
    console.log("Attached File:", selectedRequest.attachedFile);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleFileChange(_event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Create Leave Request</h3>
        <form onSubmit={handleSave}>
          <label>Approver:</label>
          <input
            type="text"
            placeholder="Approver"
            value={selectedRequest.approver}
            onChange={(e) =>
              setSelectedRequest({
                ...selectedRequest,
                approver: e.target.value,
              })
            }
          />
 <label>แนบไฟลล์ (PDF):</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
          <label>Type:</label>
          <input
            type="text"
            placeholder="Type"
            value={selectedRequest.type}
            onChange={(e) =>
              setSelectedRequest({
                ...selectedRequest,
                type: e.target.value,
              })
            }
          />

          <label>Start Date:</label>
          <DatePicker
            selected={selectedRequest.startDate}
            onChange={(date) =>
              setSelectedRequest({
                ...selectedRequest,
                startDate: date || new Date(),
              })
            }
          />

          <label>End Date:</label>
          <DatePicker
            selected={selectedRequest.endDate}
            onChange={(date) =>
              setSelectedRequest({
                ...selectedRequest,
                endDate: date || new Date(),
              })
            }
          />

          <label>Duration:</label>
          <input
            type="text"
            placeholder="Duration"
            value={selectedRequest.duration}
            onChange={(e) =>
              setSelectedRequest({
                ...selectedRequest,
                duration: e.target.value,
              })
            }
          />

          <label>Period:</label>
          <input
            type="text"
            placeholder="Period"
            value={selectedRequest.period}
            onChange={(e) =>
              setSelectedRequest({
                ...selectedRequest,
                period: e.target.value,
              })
            }
          />

          <label>Status:</label>
          <input
            type="text"
            placeholder="Status"
            value={selectedRequest.status}
            onChange={(e) =>
              setSelectedRequest({
                ...selectedRequest,
                status: e.target.value,
              })
            }
          />

          <div className="button-group">
            
            <button type="submit">Submit</button>
            <button className="close-button" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLeavePopup;
