import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signup";
import "./styles.css";

export default function App() {
  const [link, setLink] = useState("");
  return (
    <div className="App">
      <button onClick={e => setLink("login")}>Login</button>
      <button onClick={e => setLink("signup")}>Signup</button>
      {link === "login" ? <Login /> : link === "signup" ? <SignUp /> : null}
    </div>
  );
}
