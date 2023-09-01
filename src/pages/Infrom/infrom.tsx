import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "@/styles/components/navbar.css";
import "@/styles/components/sidebar.css";
import "@/styles/components/popupadd.css";
import "@/styles/pages/userSetting.css";
import Dropdown from "@/components/dropdown";
import Modal from "@/components/modal";
import "@/styles/components/modal.css";
import DateTimePicker from "@/components/DateTimePicker";
// import Calendar from "@/components/CalendarView";
const Inform: React.FC = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      typeInForm: "มาสาย",
      date: new Date(),
      description: "รถติด",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    // สามารถทำอะไรกับวันที่ที่เลือกได้ตามต้องการ
  };
  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
    // ทำอะไรกับวันที่ที่ถูกเลือกได้ตามต้องการ
  };

  const [selectedEmployee, setSelectedEmployee] = useState<{
    id: number;
    typeInForm: string;
    date: Date | null;
    description: string;
  }>({
    id: 0,
    typeInForm: "",
    date: new Date(), // กำหนดให้วันที่เป็นวันปัจจุบัน
    description: "",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmployee = {
      id: employees.length + 1,
      date: selectedEmployee.date!,
      description: selectedEmployee.description,
      typeInForm: selectedEmployee.typeInForm,
    };

    setEmployees([...employees, newEmployee]);

    setSelectedEmployee({
      id: 0,
      date: new Date(),
      description: "",
      typeInForm: "",
    });

    closeModal();
  };

  const handleEditSave = (editedEmployee: any) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === editedEmployee.id ? editedEmployee : employee
    );
    setEmployees(updatedEmployees);

    setSelectedEmployee({
      id: 0,
      date: new Date(),
      typeInForm: "",
      description: "",
    });
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="content">
        <Sidebar />

        <div className="employee-table">
          <div className="table-card">
            <div>
              <button className="add-button" onClick={openModal}>สร้าง Infrom</button>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>สร้าง</h2>
                <form onSubmit={handleSave}>
                  <div>
                    <label>ประเภท infrom</label>
                    <input
                      type="text"
                      value={selectedEmployee.typeInForm}
                      onChange={(e) =>
                        setSelectedEmployee({
                          ...selectedEmployee,
                          typeInForm: e.target.value,
                        })
                      }
                    />
                    
     
                  </div>
                  <div>
                    <label>คำอธิบาย</label>
                    <input
                      type="text"
                      value={selectedEmployee.description}
                      onChange={(e) =>
                        setSelectedEmployee({
                          ...selectedEmployee,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>

                 <label>วันที่</label>
                  <DatePicker
                    selected={selectedEmployee.date}
                    onChange={(date) =>
                      setSelectedEmployee({
                        ...selectedEmployee,
                        date: date,
                      })
                    }
                  /> 
                   {/* <DateTimePicker selectedDate={selectedDate} onDateChange={handleDateChange} /> */}
                   {/* <Calendar onSelectDate={handleDateSelect} />
      {selectedDate && <p>Selected Date: {selectedDate.toString()}</p>} */}

                  <button type="submit">บันทึก</button>
                </form>
              </Modal>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>ประเภท infrom</th>
                  <th>คำอธิบาย</th>
                  <th>วันที่</th>
               
                
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.typeInForm}</td>
                    <td>{employee.description}</td>
                    <td>{employee.date.toDateString()}</td>   
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inform;
