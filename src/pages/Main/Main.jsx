import "./Main.scss";
import axios from "axios";
import { Button } from "react-bootstrap";
import requests from "../../Request";
import { useEffect, useState } from "react";
import TopRated from "../../components/MainComponent/TopRated";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../AuthContext";
import SignIn from "../SignIn/SignIn";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const { currentUser } = useAuth();

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);
  return (
    <>
      {currentUser ?
      <div className="main bg-dark">
        <Navbar className="navbar container-fluid" />
        <div className="top-pane bg-dark">
          <div className="imgContainer">
            <img
              className="img"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt={movie?.title}
            />
          </div>
          <div className="content">
            <h1 className="movie-title">{movie?.title}</h1>
            <div>
              <Button variant="danger">Play</Button>
              <Button className="mx-3" variant="outline-light">
                Watch Later
              </Button>
            </div>
            <p className="my-3" style={{ color: "white" }}>
              Released: {movie?.release_date}
            </p>
            <p
              className="my-3 w-100"
              style={{
                color: "whitesmoke",
                fontSize: "20px",
                textAlign: "justify",
                paddingRight: "15px",
              }}
            >
              {movie?.overview}
            </p>
          </div>
        </div>
        <div className="bottom-pane bg-dark">
          <TopRated />
        </div>
      </div>
      : <SignIn />}
    </>
  );
};

export default Main;
