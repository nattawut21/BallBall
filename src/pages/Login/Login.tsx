import React from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    // ตรวจสอบข้อมูลเข้าสู่ระบบ
    if (username === "Atchanat" && password === "Password") {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
