import { portfolioData } from "../data/portfolioData";
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div>
            {portfolioData.experience.map((job, index) => (
              <div key={index} className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{job.position}</h4>
                    <h5>{job.company}</h5>
                  </div>
                  <h3>{job.year}</h3>
                </div>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
