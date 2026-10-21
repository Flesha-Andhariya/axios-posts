
import "./style.css";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>Email: abc123@gmail.com</p>
        <p>Phone: +911234567890</p>           
        <p>Address: Bhavnagar, Gujarat, India</p>
         <Button
          text="Contact Now"  link="#"
        />
      </div>
    </div>
  );
}
