import { Link } from "react-router-dom";
import "./style.css";

export default function DigitalMarketing() {
  return (
    <div className="webdev-page">
      <h1>Digital Marketing</h1>

      <p className="webdev-intro">
        We help your business reach more people and grow
        online through digital marketing.
      </p>

      <div className="webdev-container">
        <div className="webdev-card">
          <h2>Social Media</h2>
          <p>Promote your business on social media platforms.</p>
        </div>

        <div className="webdev-card">
          <h2>Email Marketing</h2>
          <p>Connect with customers through email campaigns.</p>
        </div>

        <div className="webdev-card">
          <h2>Online Advertising</h2>
          <p>Reach potential customers with online ads.</p>
        </div>
      </div>
    </div>
  );
}