import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";

// Layout
import { Layout } from "../layouts/Layout";

// Pages
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";

export const Router = () => {
  const location = useLocation();

  // Page titles
  useEffect(() => {
    const pageTitles = {
      "/": "react-component-library",
    };

    const currentTitle = pageTitles[location.pathname];
    if (currentTitle) {
      document.title = currentTitle;
    } else {
      document.title = "404 - Page Not Found";
    }
  }, [location]);

  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />

        {/* <Route
          path={"/dashboard"}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}

        <Route path={"/*"} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
