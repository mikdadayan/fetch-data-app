import React from "react";
import Form from "../components/form/form";
import { useAuthentication } from "../hooks/useAuthentication";

const CreateJoke = () => {
  useAuthentication();
  return (
    <>
      {/* <LinkButton path="/joke/new" title={"Create Joke"} /> */}
      <Form page="new" />
    </>
  );
};

export default CreateJoke;
