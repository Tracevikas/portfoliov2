import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Square Yards Pvt. Ltd.</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Architected and scaled enterprise-grade full-stack platforms used across multiple business workflows. 
              Improved API response times by 40%+ through Redis caching, query optimization, and indexing strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA Graduate</h4>
                <h5>Maharishi Dayanand University</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Graduated with a Bachelor of Computer Applications. Specialized in SaaS product engineering, Agile/Scrum methodologies, and system performance optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Square Yards Pvt. Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and deploying microservices to improve system scalability and release reliability. Building AI-powered tools reducing manual operational effort by 50%+. Leading code reviews and managing CI/CD pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
