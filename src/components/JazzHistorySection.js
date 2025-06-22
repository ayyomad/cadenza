import React, { useEffect, useRef } from 'react';
import './JazzHistorySection.css';

const JazzHistorySection = () => {
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
    <section className="jazz-history" ref={sectionRef}>
      <div className="jazz-text">
        <h2>What Is <span className="bl">Jazz</span></h2>
        <span className="subh">A Sound Born from Struggle, Soul, and Freedom</span>
        <p>
          Jazz is more than just music — it's a story of resilience, innovation, and identity.
          Emerging from African American communities in the early 20th century, jazz blended blues,
          ragtime, and spirituals into a new form of expression. It wasn’t written — it was felt.
        </p>
        <p>
          From the smoky clubs of New Orleans to global concert halls, jazz has evolved through decades
          of cultural shifts, wars, and revolutions. Its sound is spontaneous, its spirit rebellious.
        </p>
        <p>
          Improvisation, swing, and emotional depth define jazz — but its beauty lies in how every musician
          tells the same story in a new voice.
        </p>
      </div>

      <div className="jazz-image">
        <img
          src="https://raw.githubusercontent.com/ayyomad/cadenza-assets/main/images/jazz-history.jpg"
          alt="Jazz cultural history"
        />
      </div>
    </section>
  );
};

export default JazzHistorySection;
