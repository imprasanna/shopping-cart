import { useState } from "react";
import logo from "../Assets/logo.png";

import React from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const setName = (ev) => {
    setUser({ ...user, name: ev.target.value });
  };

  const setEmail = (ev) => {
    setUser({ ...user, email: ev.target.value });
  };

  const setPassword = (ev) => {
    setUser({ ...user, password: ev.target.value });
  };

  return (
    <div>
      <img width="150px" src={logo} />
      <form>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={setName}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={setEmail}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={setPassword}
        />
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
