import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import HandshakeIcon from "@mui/icons-material/Handshake";
import "./Contact.css";

function Contact() {
  return (
    <div id="maincontact" className="contact">
      <div className="contact-left">
        <div className="touch">
          <h4>Get in Touch with me</h4>
          <HandshakeIcon className="touch-icon" />
        </div>
        <div className=" contact-icon">
          <a href="https://github.com/Balu667">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/mahendra-balreddy-b024591a2/">
            <LinkedInIcon />
          </a>
          <a href="mailto:balreddymahendra7@gmail.com">
            <EmailIcon />
          </a>
        </div>
        <div className="touch">
          <h4 style={{ marginTop: "2rem" }}>Thanks for visiting</h4>
        </div>
      </div>
    </div>
  );
}

export default Contact;
