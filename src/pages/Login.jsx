import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";
export default function Login() {
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const prevLoc = location.state?.prevLoc || "/host";
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate(prevLoc, { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  const message = location.state?.message || null;
  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="login-first">{message}</h3>}
      {error?.message && <h3 className="login-first">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>

        <p> Use this login Information:</p>

        <p>
          <b>Email:</b> b@b.com
        </p>
        <p>
          <b>Password:</b> p123
        </p>
      </form>
    </div>
  );
}
