import { memo } from "react";
import { NavLink } from "react-router-dom";
import { PATH_NAME } from "../constants";

export const Navigation = memo((): JSX.Element => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "15px 0 30px 0",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {Object.entries(Object.fromEntries(PATH_NAME)).map(
          ([route, pathName]) => (
            <li key={route}>
              <NavLink
                to={route}
                style={({ isActive }) => ({ color: isActive ? "blue" : "" })}
              >
                {pathName}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
});
