import { useAuth } from "../../AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import TvShowsComponent from "../../components/TvShows/TvShowsComponent";
import SignIn from "../SignIn/SignIn";
import "./TvShows.scss";

const TvShows = () => {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser ?
      <div className=" bg-dark container-fluid">
        <Navbar />
        <div className="title-pane">
          <h1 className="title">TV Shows</h1>
          <p className="desc">
            These days, the small screen has some very big things to offer. From
            <br />
            sitcoms to dramas to travel and talk shows, these are all the best
            <br />
            shows on TV.
          </p>
        </div>
        <div className="list-pane">
          <TvShowsComponent />
        </div>
      </div>
      : <SignIn />}
    </>
  );
};

export default TvShows;
