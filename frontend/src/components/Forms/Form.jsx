import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

import "../../styles/Form.css";
import logo from "../../assets/logo.png";

import LoadingIndicator from "../LoadingIndicator";

const Form = ({ route, method }) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      if (method === "login") {
        const res = await api.post(route, { email, password });
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/profile");
      } else {
        const res = await api.post(route, {
          username,
          password,
          email,
          firstname: firstName,
          lastname: lastName,
          address,
        });
        if (res.status === 201) {
          navigate("/login");
        } else {
          alert("Registration failed!");
        }
      }
    } catch (error) {
      alert(error.response ? error.response.data.detail : error.statusText);
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const loginForm = () => {
    return (
      <>
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
      </>
    );
  };

  const registerForm = () => {
    return (
      <>
        <input
          className="form-input"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="Juan"
        />
        <input
          className="form-input"
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Dela Cruz"
        />
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        />
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="juandelacruz@gmail.com"
        />

        <input
          className="form-input"
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Address"
        />
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <img className="h-20 m-5" src={logo} alt="Centennial Waters Logo" />
      <h1 className="font-semibold text-2xl">{name}</h1>
      {method === "login" ? loginForm() : registerForm()}

      {loading && <LoadingIndicator />}
      <button className="form-button" type="submit">
        {name}
      </button>
    </form>
  );
};

export default Form;
