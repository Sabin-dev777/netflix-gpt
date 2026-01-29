import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  useNowPlayingMovies();
  const location = useLocation();
  const hideHeaderPaths = ["/watch"]; // hide header for all watch pages

  const shouldHideHeader = hideHeaderPaths.some((path) =>
    location.pathname.startsWith(path),
  );
  return (
    <div>
      {!shouldHideHeader && <Header />}
      <Outlet /> {/* This is where the current route renders */}
    </div>
  );
};

export default AppLayout;
