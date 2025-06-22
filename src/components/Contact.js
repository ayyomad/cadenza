import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <img
          src="https://raw.githubusercontent.com/ayyomad/cadenza-assets/main/images/mypfp.jpg"
          alt="Sreemadhav"
          className="profile-img"
        />
        <div>
          <h2>Let's Connect</h2>
          <p>Open for collaboration, feedback, or just a conversation.</p>
          <div className="social-links">
            <a href="https://github.com/ayyomad" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://behance.net/ayyomad" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://instagram.com/ayyomad" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://themovo.netlify.app/" target="_blank" rel="noreferrer">Movo</a>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <h3>Send Feedback</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
