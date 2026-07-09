import React, { useRef } from 'react';
import LineSidebar from './LineSidebar';
import './Portfolio.css'; 

const SECTIONS = [
  'Education', 
  'Prior Jobs', 
  'Events', 
  'Certificates', 
  'Photos & Stuff'
];

export default function Portfolio() {
  const sectionRefs = useRef({});

  const handleScrollTo = (index, label) => {
    const target = sectionRefs.current[label];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="portfolio-container">
      
      {/* Left-Hand Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-sticky">
          <div className="profile-header">
            <div className="placeholder-avatar" />
            <h1 className="profile-name">Your Name</h1>
            <p className="profile-headline">Your Headline Here</p>
          </div>
          
          <LineSidebar
            items={SECTIONS}
            accentColor="#0A66C2" 
            textColor="#666666"   
            markerColor="#C7D1D8"
            showIndex={false}     
            onItemClick={handleScrollTo}
          />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="content">
        
        <section ref={(el) => (sectionRefs.current['Education'] = el)} className="portfolio-section">
          <h2>Education</h2>
          <p>Details about your university, degree, and graduation year...</p>
        </section>

        <section ref={(el) => (sectionRefs.current['Prior Jobs'] = el)} className="portfolio-section">
          <h2>Prior Jobs</h2>
          <p>Chronological list of your work experience...</p>
        </section>

        <section ref={(el) => (sectionRefs.current['Events'] = el)} className="portfolio-section">
          <h2>Events</h2>
          <p>Conferences, hackathons, and networking events you have attended...</p>
        </section>

        <section ref={(el) => (sectionRefs.current['Certificates'] = el)} className="portfolio-section">
          <h2>Certificates</h2>
          <p>Courses and professional certifications...</p>
        </section>

        <section ref={(el) => (sectionRefs.current['Photos & Stuff'] = el)} className="portfolio-section bottom-section">
          <h2>Photos & Stuff</h2>
          <p>A gallery placeholder for your personal projects, media, and other items...</p>
        </section>

        {/* Unfinished Footer Actions */}
        <div className="action-buttons">
          <button className="btn btn-outline">Share Profile</button>
          <button className="btn btn-primary">Contact Me</button>
        </div>
        
      </main>
    </div>
  );
}