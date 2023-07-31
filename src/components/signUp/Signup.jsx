import React, { useState } from "react";
import "./signup.css";

function Signup() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  
  return (
    <div className="SignupParent">
      <div className="signup">
        <h1>Sign Up</h1>
        <label htmlFor="">username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginBtn" >
          Sign Up
        </button>
        <button className="signUpBtn">Log In</button>
      </div>
    </div>
  );
}

export default Signup;
