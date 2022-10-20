import MoviesComponent from "../../components/Movies/MoviesComponent";
import Navbar from "../../components/Navbar/Navbar";
import "./Movies.scss";
import { useAuth } from "../../AuthContext";
import SignIn from "../SignIn/SignIn";

const Movies = () => {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser ? (
        <div className=" bg-dark container-fluid">
          <Navbar />
          <div className="title-pane">
            <h1 className="title">Movies</h1>
            <p className="desc">
              Movies move us like nothing else can, whether they’re scary,
              funny,
              <br />
              dramatic, romantic or anywhere in-between. So many titles, so much
              to
              <br />
              experience.
            </p>
          </div>
          <div className="list-pane">
            <MoviesComponent />
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Movies;
