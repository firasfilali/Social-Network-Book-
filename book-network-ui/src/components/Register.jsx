import React, { useState, useEffect } from "react";
import AuthenticationApi from "../api/src/api/AuthenticationApi";
import ApiClient from "../api/src/ApiClient";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  const authApi = new AuthenticationApi();

  const handleRegister = () => {
    const registrationRequest = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };
    authApi.register(registrationRequest, (err, data, response) => {
      if (err) {
        console.error("Error during registration:", err);
        const errorMessage = err.message || "An unexpected error occurred.";
        setError(errorMessage); // Set the error message from the backend
        setSuccess(null);
      } else {
        console.log("Registration successful:", data);
        setSuccess(
          "Registration successful. Please check your email to activate your account."
        );
        setError(null);
      }
    });
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
     
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {success && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Success</strong>
            <ul className="list-disc">{success}</ul>
          </div>
        )}
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <ul className="list-disc">{error}</ul>
            </div>
          )}
          <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
          <input
            type="text"
            placeholder="First name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg mb-4"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg mb-4"
          />
          <button
            onClick={handleRegister}
            className="w-full bg-indigo-600 text-white p-2 rounded-lg"
          >
            Register
          </button>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account ?{" "}
            <button
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              onClick={login}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
