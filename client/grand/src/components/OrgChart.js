import React from 'react';
import './OrgChart.css';

const people = [
  { name: 'Ken Mutugi', degree: 'BSC Civil Engineering (UON)', role: 'Director', percentage: '30%' },
  { name: 'Hagar Oner', degree: 'B Com Finance (UON)', role: 'Director', percentage: '40%' },
  { name: 'Monica Kathure', degree: 'BED (UON)', role: 'Director', percentage: '30%' },
];

function OrgChart() {
  return (
    <section id="org-chart" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Organization</h2>
        <div className="org-chart">
          {people.map((person, index) => (
            <div key={index} className="org-chart-item">
              <div className="org-chart-image">
                <img src="https://via.placeholder.com/100" alt={person.name} className="img-fluid rounded-circle" />
              </div>
              <div className="org-chart-info">
                <h3>{person.name}</h3>
                <p>{person.degree}</p>
                <p>{person.role}</p>
                <p>{person.percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OrgChart;
