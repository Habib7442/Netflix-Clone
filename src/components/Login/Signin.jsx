import "./Signin.scss";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../../AuthContext";

const SigninComp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState(``);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError(``);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/main");
    } catch {
      setError(`Failed to login`);
    }
    setLoading(false);
  }
  return (
    <div className="signin">
      <div className="body">
        <h1 className="h1">Sign In</h1>
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
          Sign In
        </Button>

        <div className="desc">
          New to Netflix? <Link to="/">Sign Up Now</Link>
        </div>
      </div>
    </div>
  );
};

export default SigninComp;
