import React from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import Button from "../../components/button.tsx/button";
import { generateToken } from "../../utils/functions";

import "./login-style.css";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();
  return (
    <div className="Login">
      {!isAuthenticated && (
        <Button
          title="Login"
          position="center"
          className={["login-button"]}
          onClick={() => {
            localStorage.setItem("token", JSON.stringify(generateToken()));
            setIsAuthenticated(true);
          }}
        />
      )}
    </div>
  );
};

export default Login;
