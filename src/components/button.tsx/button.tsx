import React from "react";
import "./button-style.css";

interface Props {
  className?: string[];
  title: string;
  position: "start" | "end" | "center";

  onClick: (event: React.MouseEvent) => void;
}

const Button: React.FC<Props> = ({
  className = [],
  title,
  position = "start",
  onClick,
}) => {
  return (
    <div
      className="button-wrapper"
      style={{ justifyContent: `flex-${position}` }}
    >
      <button className={className.join()} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
