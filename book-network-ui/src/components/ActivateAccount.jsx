import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-code-input";
import AuthenticationApi from "../api/src/api/AuthenticationApi";

function ActivateAccount() {
  const [activationCode, setActivationCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const navigate = useNavigate();
  const authApi = new AuthenticationApi();

  const handleCodeChange = (value) => {
    setActivationCode(value);

    if (value.length === 6) {
      // Automatically verify the activation code when all 6 digits are entered
      verifyActivationCode(value);
    }
  };
  const verifyActivationCode = (code) => {
    setIsSubmitting(false);
    setError("");
    setMessage("");

    // Attempt activation using the provided activation code
    authApi.confirm(code, (err, data, response) => {
      if (err) {
        console.error("Activation error:", err);
        setError("Token has been expired or invalid, please try again!");
      } else {
        console.log("Activation successful:", data);
        setMessage("Account successfully activated. You can now log in.");
        // Redirect to login page after a brief delay
        setTimeout(() => {
          navigate("/login");
        }, 4000);

        setIsSubmitting(true);
      }
      
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        {message && <div className="text-green-500 font-bold">{message}</div>}
        {error && <div className="text-red-500 font-bold">{error}</div>}
        {isSubmitting && <div>Processing activation, please wait...</div>}
          <h1 className="text-2xl font-bold mb-4">Activate Account</h1>
          <ReactCodeInput value={activationCode} onChange={handleCodeChange} fields={6} />  
        </div>
      </div>
    </>
  );
}

export default ActivateAccount;
