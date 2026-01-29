import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  console.log("aa", user);

  if (user) {
    return <Navigate to="/browse" replace />;
  }

  return children;
};

export default PublicRoute;
