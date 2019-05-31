import React from 'react';
import Portrait from '../img/portrait.jpg';
import Footer from './Footer';

function About() {
  return (
    <div>
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img src={Portrait} alt="Lakhal Wafa" className="bio-image" />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <h4>Creative, Passionate, Focused</h4>
            <p>
              A hard-working, self-motivated and self-learning IT management
              graduate who is willing to learn new skills and experiences.
              Currently I'm a freelance designer, community manager and web
              developer, who works with a variety of clients and on many diverse
              projects.
            </p>
            <div>
              <h3>My Skills</h3>
              <p>
                Branding & Logo, Interface Design, Web Development, Wordpress &
                Illustration
              </p>
            </div>
          </div>
          <div className="job job-1">
            <h3>COMMUNITY MANAGER/DESIGNER</h3>
            <p>Magic Way Design</p>
          </div>
          <div className="job job-2">
            <h3>COMMUNITY MANAGER/DESIGNER</h3>
            <p>Disrupt Vidiyo</p>
          </div>
          <div className="job job-3">
            <h3>COMMUNITY MANAGER</h3>
            <p>International Book Fair of Tunis</p>
          </div>
          <div className="job job-4">
            <h3>COMMUNITY MANAGER</h3>
            <p>Tuninfo FOR You</p>
          </div>
          <div className="job job-5">
            <h3>WEB DEVELOPMENT INTERNSHIP</h3>
            <p>Empreinte Designer</p>
          </div>
          <div className="job job-6">
            <h3>SOFTWARE DEVELOPMENT INTERNSHIP</h3>
            <p>SagemCom</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
