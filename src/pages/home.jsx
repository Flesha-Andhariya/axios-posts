
import "./style.css";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to My Website</h1>
        <p>
          Discover new ideas, explore my work, and enjoy a simple and creative experience.
        </p>
        <Button
          text="Get Started"
        />
      </div>
    </div>
  );
}
