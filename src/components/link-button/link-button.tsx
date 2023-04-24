import React from "react";
import { Link } from "react-router-dom";
import "./link-button-style.css";

interface Props {
  path: string;
  title: string;
}

const LinkButton: React.FC<Props> = ({ path, title }) => {
  return (
    <div className="Button">
      <Link to={{ pathname: path }} className="Button-link">
        <button className="Button-button">{title}</button>
      </Link>
    </div>
  );
};

export default LinkButton;
