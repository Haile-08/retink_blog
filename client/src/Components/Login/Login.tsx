import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../state/authSlice";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:4545/Author/login", {
        email: email,
        password: password,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        dispatch(
          setLogin({
            user: resData?.data.user,
            token: resData?.data.token,
          })
        );
        navigate("/author");
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <p>Login</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
