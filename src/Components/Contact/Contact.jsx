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
          <a href="https://github.com/VijayaragavanS1999">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/vijaya-ragavan-858b671ba/">
            <LinkedInIcon />
          </a>
          <a href="mailto:sasigaviprt@gmail.com">
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
