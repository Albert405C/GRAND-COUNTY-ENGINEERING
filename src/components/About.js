import React, { useState } from 'react';
import './About.css';

function About() {
  const [activeTab, setActiveTab] = useState('values');

  const renderContent = () => {
    switch (activeTab) {
      case 'values':
        return (
          <div className="tab-content">
            <h3>VALUES</h3>
            <p>Every great institution is the lengthened shadow of its founders. Their character determines the character of the entire organization because a little leaven leavens the whole lump. A bibliography or list of references will appear at the end of any credible report and citations are often included within the text itself. Complex terms are explained within the body of the report or listed as footnotes in order to make the report easier to follow. A short summary of the report’s contents, called an abstract, may appear in the beginning so that the audience knows what the report will cover. Online reports often contain hyperlinks to internal or external sources as well. Verbal reports differ from written reports in the minutiae of their format, but they still educate or advocate for a course of action. Quality reports will be well researched and the speaker will list their sources if at all possible.</p>
          </div>
        );
      case 'capacity':
        return (
          <div className="tab-content">
            <h3>CAPACITY</h3>
            <p>Our company essentially maintains an uncompromising stand in excellence, skill, competence, vision and flawless job delivery at all times. We believe in updating, upgrading and retaining our staff and management expand vigorously as expand vigorously as a global outfit and dominate in our sphere of operation. We set high standards of quality in management, staff, products and job delivery and we adapt quickly in order to stand out in a business world characterized by constant and rapid improvement. We care more than other competitors in our field and we know it is wise. We take risk in our business and we think it is safe. We dream more than other competitors in our field and we believe it is practicable. We want to assure all our clients and intending clients that our utmost belief in our race of clinching the trophy of quality, capacity and excellence is that we have no finish line.</p>
          </div>
        );
      case 'executiveSummary':
        return (
          <div className="tab-content">
            <h3>Executive Summary</h3>
            <p>Grand County Engineering Solutions Ltd. is a true Kenyan success story. Grand County Engineering Solutions Ltd. provides civil engineering, procurement, construction management, maintenance and project management services to clients in diverse East Africa Industries. Utilizing our 24/7 global project execution capabilities, Grand County Engineering Solutions Ltd. delivers projects with quality and safety to all its clients. Grand County Engineering Solutions Ltd. offers clients a full service solution for conceptual studies, front-end engineering and design, engineering, design, procurement, construction management, start-up and commissioning services.</p>
          </div>
        );
      case 'kenyanAdvantage':
        return (
          <div className="tab-content">
            <h3>KENYAN ADVANTAGE</h3>
            <p>Grand County Engineering Solutions Ltd. highly qualified and experienced engineers have also been trained by world leading OEMs, so you can be sure they possess the vital knowledge, industry insight and technical capabilities you need to deliver your projects more efficiently. We understand the complex demands you face on a daily basis.</p>
          </div>
        );
      case 'commitment':
        return (
          <div className="tab-content">
            <h3>COMMITMENT</h3>
            <p>All great achievers in life and business are those who put the whole of their heart into what they are doing. We, Grand County Engineering are committed to excellence, which we perceive as a product of experience, garnered through hard dedicated effort towards a particular goal. We unwaveringly keep our focus on our goal and we deploy all our efforts and capacities in order to achieve it, provided that the means adhere to our ethical principles. It is this excellence, which proceeds on negotiable moral standards that we guarantee to offer to all our clients and partners.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Grand County Engineering</h2>
        <p className="lead text-center">We are a team of dedicated professionals committed to delivering cutting-edge engineering solutions that shape the world around us. With a focus on innovation, sustainability, and excellence, we tackle complex challenges to create a brighter future for our communities.</p>
        
        <div className="stats-container mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 stat-item">
              <i className="fas fa-project-diagram"></i>
              <h4>100+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="col-md-3 col-sm-6 stat-item">
              <i className="fas fa-users"></i>
              <h4>50+</h4>
              <p>Expert Engineers</p>
            </div>
            <div className="col-md-3 col-sm-6 stat-item">
              <i className="fas fa-award"></i>
              <h4>25+</h4>
              <p>Industry Awards</p>
            </div>
            <div className="col-md-3 col-sm-6 stat-item">
              <i className="fas fa-globe"></i>
              <h4>10+</h4>
              <p>Countries Served</p>
            </div>
          </div>
        </div>
        
        {/* Additional Sections */}
        <div className="additional-sections mt-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'values' ? 'active' : ''}`} onClick={() => setActiveTab('values')}>Values</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'capacity' ? 'active' : ''}`} onClick={() => setActiveTab('capacity')}>Capacity</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'executiveSummary' ? 'active' : ''}`} onClick={() => setActiveTab('executiveSummary')}>Executive Summary</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'kenyanAdvantage' ? 'active' : ''}`} onClick={() => setActiveTab('kenyanAdvantage')}>Kenyan Advantage</button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${activeTab === 'commitment' ? 'active' : ''}`} onClick={() => setActiveTab('commitment')}>Commitment</button>
            </li>
          </ul>
          <div className="tab-content mt-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
