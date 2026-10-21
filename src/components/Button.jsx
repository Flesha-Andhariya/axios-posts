import { Link } from "react-router-dom";
import "./Button.css";

export default function Button(props) {
  return (
    <Link to={props.link} className="custom-button">
      {props.text}
    </Link>
  );
}