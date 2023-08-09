import React, { useState } from "react";
import "@/styles/pages/login.css";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const usernameRegex = /^[\w.]*$/;
const passwordRegex = /^[\w@]*$/;
const invalidCharError = "ห้ามใส่อักขระพิเศษหรือวรรค";
const missingFieldError = "กรุณากรอก Username และ Password";

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateInput = (inputValue: string, regex: RegExp) => {
    if (!regex.test(inputValue)) {
      setError(invalidCharError);
      return false;
    }
    setError("");
    return true;
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (validateInput(inputValue, usernameRegex)) {
      setUsername(inputValue);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (validateInput(inputValue, passwordRegex)) {
      setPassword(inputValue);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username || !password) {
      setError(missingFieldError);
      return;
    }

    onLogin(username, password);
  };

  return (
    <div className="container">
      <div className="card">
        <form className="formContainer" onSubmit={handleSubmit}>
          <h1>LOGO</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              pattern="^[\w.]*$"
              title={invalidCharError}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              pattern="^[\w@]*$"
              title={invalidCharError}
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
