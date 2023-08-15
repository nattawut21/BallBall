import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/dashboard";
import UserSetting from "./pages/UserSetting/userSetting";
import EditUser from "./pages/UserSetting/editUser";
import PublicHoliday from "./pages/PubilcHoliday/publicHoliday";
import LeaveType from "./pages/Leavetype/leavetype";
import ViewLeave from "./pages/UserSetting/viewLeave";
import Report from "./pages/Report/report";
import Received from "./pages/Report/received";

import LeavePolicy from "./pages/Leavepolicy/Leavepolicy";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/user-edit" element={<EditUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-setting" element={<UserSetting />} />
          <Route path="/leavepolicy" element={<LeavePolicy />} />
          <Route path="/leavetype" element={<LeaveType />} />
          <Route path="/viewleave" element={<ViewLeave />} />
          <Route path="/publicholiday" element={<PublicHoliday />} />
          <Route path="/report" element={<Report />} />
          <Route path="/received" element={<Received />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
