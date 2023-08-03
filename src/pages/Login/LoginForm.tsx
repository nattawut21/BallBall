import React, { useState } from "react";
import "@/styles/pages/login.css";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const regex = /^\w*$/; // กำหนด Regular Expression ให้รองรับอักขระตัวอักศรและตัวเลขเท่านั้น
    if (!regex.test(inputValue)) {
      setError("ห้ามใส่อักขระพิเศษหรือวรรค");
    } else {
      setUsername(inputValue);
      setError("");
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const regex = /^\w*$/; // กำหนด Regular Expression ให้รองรับอักขระตัวอักศรและตัวเลขเท่านั้น
    if (!regex.test(inputValue)) {
      setError("ห้ามใส่อักขระพิเศษหรือวรรค");
    } else {
      setPassword(inputValue);
      setError("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username || !password) {
      setError("กรุณากรอก Username และ Password");
      return;
    }

    onLogin(username, password);
  };

  return (
    <div className="container">
      <div className="card">
        <form className="form-container" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              pattern="^\w*$"
              title="ห้ามใส่อักขระพิเศษหรือวรรค"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              pattern="^\w*$"
              title="ห้ามใส่อักขระพิเศษหรือวรรค"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
