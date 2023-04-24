import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../utils/functions";

export function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isLoggedIn());
  const navigate = useNavigate();

  useEffect(() => {
    !isAuthenticated ? navigate("/login") : navigate("/");
  }, [isAuthenticated, navigate]);

  return { isAuthenticated, setIsAuthenticated };
}
