
import { Link } from "react-router-dom";
import "./Button.css";

export default function LinkButton({ to, children }) {
  return (
    <Link to={to} className="custom-button">
      {children}
    </Link>
  );
}
