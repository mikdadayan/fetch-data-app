import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./form-style.css"; // This imports the styling you provided
import { useFetchSingleData } from "../../hooks/useFetchData";
import { TableData } from "../../utils/types";
import Input from "../input/input";
import { createdAtDate } from "../../utils/functions";
import LinkButton from "../link-button/link-button";
import Button from "../button.tsx/button";

const BASE_URL = "https://retoolapi.dev/zu9TVE/jokes";

interface FormProps {
  page: "new" | "edit";
}

const Form = ({ page }: FormProps) => {
  const { item_id } = useParams<{ item_id: string }>();
  const navigate = useNavigate();

  const { data, error, loading, setData } = useFetchSingleData<TableData>(
    `${BASE_URL}/${item_id}`,
    item_id || ""
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    console.log(name, value);
    setData((prevFormData) => ({
      ...prevFormData!,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (item_id !== page) {
        await fetch(`${BASE_URL}/${item_id !== page && item_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } else {
        await fetch(`${BASE_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, CreatedAt: createdAtDate() }),
        });
      }

      navigate("/");
    } catch (error) {
      // handle error
    }
  };

  const handleDelete = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      await fetch(`${BASE_URL}/${item_id}`, {
        method: "DELETE",
      });

      navigate("/");
    } catch (error) {
      // handle error
    }
  };

  return (
    <>
      {error && <div>Something went wrong ...</div>}

      {!loading && (
        <>
          <LinkButton path="/" title="Back" />
          <form className="form" onSubmit={handleSubmit}>
            <Input
              type="text"
              id="body"
              name="Body"
              value={data?.Body || ""}
              onChange={handleChange}
            />
            <Input
              type="text"
              id="joke"
              name="Joke"
              value={data?.Joke || ""}
              onChange={handleChange}
            />
            <Input
              type="text"
              id="title"
              name="Title"
              value={data?.Title || ""}
              onChange={handleChange}
            />
            <Input
              type="text"
              id="author"
              name="Author"
              value={data?.Author || ""}
              onChange={handleChange}
            />
            <Input
              type="number"
              id="views"
              name="Views"
              value={data?.Views || ""}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          {item_id !== page && (
            <Button
              title="Delete"
              onClick={handleDelete}
              className={["delete-button"]}
              position="end"
            />
          )}
        </>
      )}
    </>
  );
};

export default Form;
