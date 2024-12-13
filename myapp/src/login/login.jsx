import React from "react";
import { useState } from "react";

function Login() {
  // const [text, setText] = useState("");

  const [result, setResult] = useState({ u: "", m: "", e: "" });

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    expiresInMins: 30,
});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult({ u: formData.user, m: formData.mobile, e: formData.email });
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        formData

        // optional, defaults to 60
      )// Include cookies (e.g., accessToken) in the request
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInput}
          placeholder="enter username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
          placeholder="enter password"
        />
        <input
          type="email"
          name="email"
          value={FormData.expiresInMins}
          onChange={handleInput}
          placeholder="30"
        />

        <input type="submit" />
      </form>
      <h1>{result.u}</h1>
      <h1>{result.m}</h1>
      <h1>{result.e}</h1>
    </div>
  );
}

export default Login;
