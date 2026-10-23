import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./services-website/home";
import About from "./services-website/about";
import Services from "./services-website/services";
import WebDevelopment from "./services-website/web-development";
import SEO from "./services-website/seo";
import DigitalMarketing from "./services-website/digital-marketing";
import Contact from "./services-website/contact";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter basename="/service-website">
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>

        <div className="nav-links">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li className="dropdown">
            <Link to="/services">Services ▾</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/web-development">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/seo">SEO Services</Link>
              </li>
              <li>
                <Link to="/services/digital-marketing">
                  Digital Marketing
                </Link>
              </li>
            </ul>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-development" 
        element={<WebDevelopment />}/>
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/digital-marketing"
        element={<DigitalMarketing />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
