import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('visible');
          }
        });
      },
      { threshold: 0.4 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-text">
        <h2>About This Project</h2>
        <p>
          This archive was created by Sreemadhav as part of a React.js project assignment — driven
          by a love for music and a fascination with the expressive depth of jazz.
        </p>
        <p>
          All content is pulled dynamically using Axios from a structured JSON file hosted externally.
          The project explores the intersection of design, history, and digital storytelling.
        </p>
        <p className="signature">— Sreemadhav</p>
      </div>
    </section>
  );
};

export default About;
