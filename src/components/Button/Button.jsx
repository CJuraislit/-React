import "./Button.css";
import { Children } from "react";

export default function Buttton({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
