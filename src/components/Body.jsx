import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import ErrorPage from "./ErrorPage";
import MovieDetail from "./MovieDetail";
import Watch from "./Watch";
import Watchlist from "./WatchList";
import AppLayout from "./AppLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      element: <AppLayout />, // Header + Outlet
      children: [
        {
          path: "/browse",
          element: (
            <ProtectedRoute>
              <Browse />
            </ProtectedRoute>
          ),
        },
        {
          path: "/movie/:id",
          element: (
            <ProtectedRoute>
              <MovieDetail />
            </ProtectedRoute>
          ),
        },
        {
          path: "/watch/:id",
          element: (
            <ProtectedRoute>
              <Watch />
            </ProtectedRoute>
          ),
        },
        {
          path: "/watchlist",
          element: (
            <ProtectedRoute>
              <Watchlist />
            </ProtectedRoute>
          ),
        },
      ],
    },
    { path: "/error", element: <ErrorPage /> },
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
