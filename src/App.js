import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Movies from "./pages/Movies/Movies";
import TvShows from "./pages/TvShows/TvShows";
import Main from "./pages/Main/Main";
import { useAuth } from "./AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies-1920",
    element: <Movies />,
  },
  {
    path: "/main",
    element: <Main />,
  },

  {
    path: "/tvshows-006",
    element: <TvShows />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
