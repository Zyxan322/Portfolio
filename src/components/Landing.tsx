import { PropsWithChildren } from "react";
import { portfolioData } from "../data/portfolioData";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {portfolioData.personal.firstName}
              <br />
              <span>{portfolioData.personal.lastName}</span>
            </h1>
            <p className="landing-tagline">{portfolioData.personal.tagline}</p>
            <div className="landing-cta-wrapper">
              <a href={portfolioData.social.behance} target="_blank" rel="noopener noreferrer" className="hero-cta" data-cursor="disable">
                View my portfolio
              </a>
              <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hero-cta hero-cta-secondary" data-cursor="disable">
                Connect with me
              </a>
            </div>
          </div>
          <div className="landing-info">
            <h3>UI/UX Product</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Designer</div>
              <div className="landing-h2-2">Manager</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Manager</div>
              <div className="landing-h2-info-1">Designer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
