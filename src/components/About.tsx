import { portfolioData } from "../data/portfolioData";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          {portfolioData.personal.bio}
        </p>
        <div className="about-highlights">
          <div className="highlight-item">
            <span className="highlight-number">5+</span>
            <span className="highlight-label">Years Experience</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">50+</span>
            <span className="highlight-label">Projects Completed</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">100%</span>
            <span className="highlight-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
