import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { portfolioData } from "../data/portfolioData";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${portfolioData.personal.email}`} data-cursor="disable">
                {portfolioData.personal.email}
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={portfolioData.social.github}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={portfolioData.social.behance}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{portfolioData.personal.firstName} {portfolioData.personal.lastName}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
