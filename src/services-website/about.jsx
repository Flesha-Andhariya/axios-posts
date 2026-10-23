import "./style.css";
import LinkButton from "../components/Button";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Our Company</h1>
        <p>
          We help businesses grow with creative ideas,
          modern websites, and smart digital solutions.
        </p>

        <div className="about-container">
          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              To provide quality solutions that help
              businesses succeed online.
            </p>
          </div>

          <div className="about-card">
            <h2>Our Vision</h2>
            <p>
              To make online business simple, modern,
              and successful for everyone.
            </p>
          </div>
        </div>

        <LinkButton to="#">
          Explore Services
        </LinkButton>
      </div>
    </div>
  );
}
