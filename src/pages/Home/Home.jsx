import { Button } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import Logout from "../../components/Logout/Logout";
import "./Home.scss";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState(``);
  const [message, setMessage] = useState(``);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage(``);
      setError(``);
      await signup(emailRef.current.value, passwordRef.current.value);

      setMessage("Sign Up Successful");
      navigate("/login");
    } catch (error) {
      // setError("Failed to create an account");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className="home">
      <div className="top-pane">
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}

        <img
          className="logo"
          src={require("../../assets/Netflixlogo.png")}
          alt=""
        />
        <div className="d-flex flexContent">
          <div className="buttons">
            <Link to="/login">
              {!currentUser && (
                <Button className="button" variant="contained" color="error">
                  Sign In
                </Button>
              )}
            </Link>
            <Link to="/main">
              {currentUser && (
                <Button className="button main-page" variant="contained" color="success">
                  Main Page
                </Button>
              )}
            </Link>
          </div>
          <div className="signOut">
            <Logout />
          </div>
        </div>
      </div>

      <div className="bottom-pane">
        <h1 className="h1">
          Unlimited movies, TV
          <br /> shows and more.
        </h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h4>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>

        <Form onSubmit={handleSubmit} className="form">
          <Form.Group id="email">
            <Form.Control
              className="input one"
              placeholder="Email"
              type="email"
              ref={emailRef}
              required
            />
          </Form.Group>

          <Form.Group id="password">
            <Form.Control
              className="input two"
              placeholder="Password"
              type="password"
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Button type="submit" disabled={loading} className="button">
            Sign Up
          </Button>
        </Form>
        <Link to="/register">
          <Button variant="contained" id="reg" color="secondary">
            Register Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
