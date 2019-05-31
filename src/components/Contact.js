import React from 'react';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <main id="contact">
        <h1 className="lg-heading">
          Get in <span className="text-secondary">Touch</span>
        </h1>
        <h2 className="sm-heading">Let's Build Something Together...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span>{' '}
            lakhal.wafa.3@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone:</span> +(216) 95 969 002
          </div>
          <div>
            <span className="text-secondary">Adresse:</span> Hammam chatt, Ben
            Arous
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
