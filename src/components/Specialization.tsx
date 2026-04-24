import { portfolioData } from "../data/portfolioData";
import "./styles/Specialization.css";

const Specialization = () => {
  return (
    <>
      {/* Development & Technical Expertise */}
      <div className="specialization-section section-container" id="expertise">
        <div className="specialization-container">
          <h2>Development & Technical Expertise</h2>
          <div className="expertise-grid">
            {portfolioData.developmentExpertise.map((item, index) => (
              <div key={index} className="expertise-card">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Growth - Specialist */}
      <div className="specialization-section specialization-highlight section-container">
        <div className="specialization-container">
          <div className="specialist-header">
            <h2>{portfolioData.socialMediaGrowth.title}</h2>
            <span className="specialist-badge">{portfolioData.socialMediaGrowth.badge}</span>
          </div>
          <p className="specialization-tagline">{portfolioData.socialMediaGrowth.tagline}</p>
          <div className="specialty-grid">
            {portfolioData.socialMediaGrowth.specialties.map((item, index) => (
              <div key={index} className="specialty-item">
                <h4>◆ {item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Crypto & Web3 Experience */}
      <div className="specialization-section section-container">
        <div className="specialization-container">
          <h2>{portfolioData.cryptoWeb3.title}</h2>
          <p className="years-badge">{portfolioData.cryptoWeb3.years} years experience</p>
          <p className="specialization-tagline">{portfolioData.cryptoWeb3.tagline}</p>
          <div className="crypto-grid">
            {portfolioData.cryptoWeb3.expertise.map((item, index) => (
              <div key={index} className="crypto-item">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI & Workflow Optimization */}
      <div className="specialization-section section-container">
        <div className="specialization-container">
          <h2>{portfolioData.aiOptimization.title}</h2>
          <div className="ai-grid">
            {portfolioData.aiOptimization.specialties.map((item, index) => (
              <div key={index} className="ai-card">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialization;
