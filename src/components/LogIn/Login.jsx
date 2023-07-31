import React, { useState } from "react";
import "./login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="LoginParent">
    
      <div className="logIn">
        <h1>Log In</h1>
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
        <button  className="loginBtn">Log In</button>
        <button className="signUpBtn">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
