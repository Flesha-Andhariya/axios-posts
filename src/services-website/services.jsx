import "./style.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services-page">
      <div className="services-content">
        <h1>Our Services</h1>

        <p>
          We provide professional digital services to help
          your business grow online.
        </p>

        <div className="services-list">
          <Link to="/services/web-development">
            Web Development
          </Link>

          <Link to="/services/seo">
            SEO Services
          </Link>

          <Link to="/services/digital-marketing">
            Digital Marketing
          </Link>
        </div>
      </div>
    </div>
  );
}
