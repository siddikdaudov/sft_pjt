import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";
import { Navigation } from "../components/Navigation";

export const Root = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === ROUTES.root) {
      navigate(ROUTES.form);
    }
  }, []);

  return (
    <>
      <Navigation />
      <main style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
        <Outlet />
      </main>
    </>
  );
};
