/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user && !user.emailVerified) {
        alert("Please verify your email before logging in.");
        auth.signOut();
      } else {
        alert("Login successful!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const inputStyle = {
    paddingLeft: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "30px",
    borderRadius: "10px",
    border: "1px solid #000",
    margin: "0 auto",
  };

  return (
    <div
      style={{
        width: "70vh",
        height: "40vh",
        margin: "auto",
        borderRadius: "10px",
        textAlign: "center",
        padding: "10px",
        boxShadow: "0 0 10px 0px #000000",
      }}
    >
      <h2>Login</h2>
      <input
        style={inputStyle}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <input
        style={inputStyle}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
