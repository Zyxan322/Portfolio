import { portfolioData } from "../data/portfolioData";
import { MdArrowOutward } from "react-icons/md";
import "./styles/SocialPresence.css";

const SocialPresence = () => {
  return (
    <div className="social-presence-section section-container" id="social">
      <div className="social-presence-container">
        <h3 className="title">Social Presence & Content Platforms</h3>
        <p className="social-tagline">Follow the journey — design, product thinking & digital growth content</p>
        
        <div className="social-links-grid">
          {portfolioData.socialPresence.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <div className="social-link-content">
                <h4>{social.platform}</h4>
                <p className="social-handle">{social.handle}</p>
                <span className="social-cta">
                  View Profile <MdArrowOutward />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialPresence;
