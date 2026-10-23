import "./style.css";
import LinkButton from "../components/Button";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>
          Welcome to Our Website
        </h1>

        <h2>
          We Turn Your Ideas Into Digital Success
        </h2>

        <p>
          We help your business grow with modern web development,
          effective SEO, and creative digital marketing.
          Our goal is to build your online presence and help
          your business reach more people.
        </p>
        <LinkButton to="#">Get Started</LinkButton>
      </div>
    </div>
  );
}
