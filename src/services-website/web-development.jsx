import "./style.css";
import { Link } from "react-router-dom";

export default function WebDevelopment() {
  return (
    <div className="webdev-page">
      <h1>Web Development</h1>

      <p className="webdev-intro">
        We create modern and responsive websites for your business.
      </p>

      <div className="webdev-container">
        <div className="webdev-card">
          <h2>Website Design</h2>
          <p>Beautiful designs for your website.</p>
        </div>

        <div className="webdev-card">
          <h2>Development</h2>
          <p>Fast and responsive websites for all devices.</p>
        </div>

        <div className="webdev-card">
          <h2>Maintenance</h2>
          <p>Keep your website updated and working smoothly.</p>
        </div>
      </div>
    </div>
  );
}