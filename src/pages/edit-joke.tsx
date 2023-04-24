import React from "react";
import Form from "../components/form/form";
import { useAuthentication } from "../hooks/useAuthentication";

const EditJoke = () => {
  useAuthentication();
  return (
    <>
      <Form page="edit" />
    </>
  );
};

export default EditJoke;
