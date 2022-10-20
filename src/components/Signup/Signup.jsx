import "./Signup.scss";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../../AuthContext";

const SignupComp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState(``);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError(``);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login");
    } catch {
      setError(`Failed to login`);
    }
    setLoading(false);
  }
  return (
    <div className="signup">
      <div className="body">
        <h1 className="h1">Sign Up</h1>
        <input
          type="text"
          className="w-100"
          ref={emailRef}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="w-100"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          className="w-100 button"
          color="error"
        >
          Sign Up
        </Button>

        <div className="desc">
          Already have an account? <Link to="/login">Sign In Now</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComp;
