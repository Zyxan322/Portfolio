import { portfolioData } from "../data/portfolioData";
import "./styles/Gaming.css";

const Gaming = () => {
  return (
    <div className="gaming-section section-container" id="gaming">
      <div className="gaming-container">
        <h2>{portfolioData.gaming.title}</h2>
        <p className="gaming-description">{portfolioData.gaming.description}</p>
        
        <div className="gaming-grid">
          {portfolioData.gaming.expertise.map((item, index) => (
            <div key={index} className="gaming-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="gaming-badges">
          {portfolioData.gaming.badges.map((badge, index) => (
            <span key={index} className="gaming-badge">{badge}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gaming;
