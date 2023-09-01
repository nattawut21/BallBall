import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface PopupProps {
  selectedEmployee: {
      id:number
      Approver:string
      date: Date
      Reason: string
      Status:string
      typeinfrom:string
  };
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<{
      id:number
      Approver:string
      date: Date
      Reason: string
      Status:string
      typeinfrom:string
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
        <h3>สร้างรายการปรับปรุงเวลางาน</h3>
        <form onSubmit={handleSave}>
         
       
          <input
            type="text"
            placeholder="ประเภท"
            value={"แจ้งปรับปรุงเวลางาน"}
            readOnly
          />
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
          <label>Reason:</label>
          <input
            type="text"
            placeholder="Reason"
            value={selectedEmployee.Reason}
            onChange={(e) =>
              setSelectedEmployee({
                ...selectedEmployee,
                Reason: e.target.value,
              })
            }

          />
        
          
         <label>Approver:</label>
          <select
            value={selectedEmployee.Approver}
            onChange={(e) =>
              setSelectedEmployee({
                ...selectedEmployee,
                Approver: e.target.value,
              })
            }
          >
            <option value="สมฤดี">สมฤดี</option>
            <option value="่admin">admin</option>
        
          </select>
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
