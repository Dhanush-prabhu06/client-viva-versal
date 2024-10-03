import React from "react";
//import { useState } from "react";
// import { auth } from "../firebase/Config"; // Make sure Firebase is configured
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");
  // const navigate = useNavigate();

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   setErrorMessage("");
  //   setSuccessMessage("");

  //   if (password !== confirmPassword) {
  //     setErrorMessage("Passwords do not match.");
  //     return;
  //   }

  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //     setSuccessMessage(
  //       "Account created successfully! Redirecting to login..."
  //     );
  //     setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
  //   } catch (error) {
  //     setErrorMessage("Registration failed. Please try again.");
  //   }
  // };

  return (
    // <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
    //   <h1 className="text-2xl font-bold mb-4 text-center">Manager Register</h1>
    //   {errorMessage && (
    //     <p className="text-sm text-red-500 mb-2">{errorMessage}</p>
    //   )}
    //   {successMessage && (
    //     <p className="text-sm text-green-500 mb-2">{successMessage}</p>
    //   )}
    //   <form onSubmit={handleRegister} className="space-y-4">
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="w-full p-2 border rounded"
    //       required
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       className="w-full p-2 border rounded"
    //       required
    //     />
    //     <input
    //       type="password"
    //       placeholder="Confirm Password"
    //       value={confirmPassword}
    //       onChange={(e) => setConfirmPassword(e.target.value)}
    //       className="w-full p-2 border rounded"
    //       required
    //     />
    //     <button
    //       type="submit"
    //       className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    //     >
    //       Register
    //     </button>
    //   </form>
    // </div>

    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 max-w-md w-full mx-auto rounded-lg shadow-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            {/* Icon */}
            <svg
              className="w-6 h-6 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M12 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-lg font-medium">Contact Owner for Access</p>
            <p className="mt-2 text-sm">
              Please contact the owner for the ID and password. Ensure you have
              the correct credentials to access the system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
