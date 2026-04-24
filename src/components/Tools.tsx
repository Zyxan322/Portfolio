import { portfolioData } from "../data/portfolioData";
import "./styles/Tools.css";

const Tools = () => {
  return (
    <div className="tools-section section-container" id="tools">
      <div className="tools-container">
        <h3 className="title">Tools & Technologies</h3>
        <div className="tools-grid">
          {portfolioData.toolsList.map((tool, index) => (
            <div key={index} className="tool-tag">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
