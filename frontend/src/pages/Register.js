import { useState } from "react";
import logo from "../Assets/logo.png";
import { useDispatch } from "react-redux";
// import { registerUser } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { login } from "../store/slices/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const auth = useSelector((state) => state.auth);

  // console.log(auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(registerUser(user));
  //   navigate("/");
  // };

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/register`,
        {
          name,
          email,
          password,
        }
      );
      // console.log("LOGIN SIGNUP RESPONSE", data);
      // console.log("JSON stringify", JSON.stringify(data));
      // save in local storage
      localStorage.setItem("user", JSON.stringify(data));
      // navigate to homepage after successful login through signup
      navigate("/");
      // dispatch the login data to the redux store
      dispatch(login(data));
      // toast.success("Signed Up Successfully!!");
    } catch (err) {
      // toast.error(err.response.data);
      alert(err.response.data);
    }
  };

  return (
    <div>
      <img width="150px" src={logo} alt="logo" />
      <form>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button onClick={handleSubmit} disabled={!name || !email || !password}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
