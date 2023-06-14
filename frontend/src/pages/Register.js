import { useState } from "react";
import logo from "../Assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/slices/authSlice";

import React from "react";

const Register = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  console.log(auth);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  return (
    <div>
      <img width="150px" src={logo} alt="logo" />
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
        <button onSubmit={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
