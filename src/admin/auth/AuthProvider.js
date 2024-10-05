import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Helper function to get the login state and check expiration
  const getStoredLoginState = () => {
    const storedData = localStorage.getItem("authData");
    if (!storedData) return false; // If no data is found, return false

    const { isLoggedIn, expiry } = JSON.parse(storedData);
    const now = new Date();

    // Check if current time is past the stored expiration time
    if (now.getTime() > expiry) {
      localStorage.removeItem("authData"); // Remove expired data
      return false; // Return false since the login state has expired
    }

    return isLoggedIn; // If not expired, return the login state
  };

  // Initialize state with stored login state or default to false
  const [isLoggedIn, setIsLoggedIn] = useState(getStoredLoginState);

  // Function to handle setting the login state and expiration in localStorage
  const setLoginState = (state, duration) => {
    const now = new Date();
    const expiry = now.getTime() + duration; // Calculate the expiry time

    // Save login state and expiration time in localStorage
    const authData = { isLoggedIn: state, expiry };
    localStorage.setItem("authData", JSON.stringify(authData));

    setIsLoggedIn(state); // Update the React state
  };

  // Login function with a 3-day expiration duration
  const login = () => {
    const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000; // 3 days
    setLoginState(true, threeDaysInMilliseconds);
  };

  // Logout function clears the stored data and sets the state to logged out
  const logout = () => {
    localStorage.removeItem("authData"); // Remove login state from localStorage
    setIsLoggedIn(false); // Set state to logged out
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext); // Hook to access authentication context
}
