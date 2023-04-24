import React from "react";
import SimpleTable from "../components/table/table";
import LinkButton from "../components/link-button/link-button";

import { useAuthentication } from "../hooks/useAuthentication";
import Button from "../components/button.tsx/button";

const Home = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();
  return (
    <>
      {isAuthenticated && (
        <Button
          title="LogOut"
          className={["login-button"]}
          position="end"
          onClick={() => {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
          }}
        />
      )}
      <LinkButton path="/joke/new" title={"Create Joke"} />
      <SimpleTable />
    </>
  );
};

export default Home;
