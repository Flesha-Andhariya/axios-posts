import { Link } from "react-router-dom";
import "./style.css";

export default function SEO() {
  return (
    <div className="webdev-page">
      <h1>SEO Services</h1>

      <p className="webdev-intro">
        We help your website rank higher in search results
        and reach more customers.
      </p>

      <div className="webdev-container">
        <div className="webdev-card">
          <h2>Keyword Research</h2>
          <p>Find the right keywords for your business.</p>
        </div>

        <div className="webdev-card">
          <h2>On-Page SEO</h2>
          <p>Improve website content and page structure.</p>
        </div>

        <div className="webdev-card">
          <h2>SEO Optimization</h2>
          <p>Improve website visibility in search engines.</p>
        </div>
      </div>
    </div>
  );
}
