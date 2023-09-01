import { useState,   } from "react";
import { app } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);  

  const navigate = useNavigate();

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

  const handleSignup = async () => {
    if (password === confirmPassword) {
      try {
        const auth = getAuth(app);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await sendEmailVerification(userCredential.user);
        alert(
          "Verification email sent. Please verify your email before logging in."
        );
        if (email && password) {
          navigate("/login");
        }
      } catch (error) {
        setError(error.message); 
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    } else {
      setError("Passwords don't match.");  
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div
      style={{
        width: "80vh",
        height: "50vh",
        margin: "auto",
        borderRadius: "10px",
        textAlign: "center",
        padding: "10px",
        boxShadow: "0 0 10px 0px #000000",
      }}
    >
      <h2>Signup</h2>
      <input
        style={inputStyle}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        style={inputStyle}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        style={inputStyle}
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      {error && <p>{error}</p>} 
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
