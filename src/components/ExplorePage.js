import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './ExplorePage.css';

const ExplorePage = () => {
  const [instruments, setInstruments] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/ayyomad/cadenza-assets/main/instruments.json')
      .then((res) => {
        const ordered = ['Saxophone', 'Trumpet', 'Piano', 'Double Bass', 'Drum Kit', 'Trombone'];
        const sorted = ordered.map(name => res.data.find(i => i.name === name)).filter(Boolean);
        setInstruments(sorted);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [instruments]);

  return (
    <section className="explore">
      {instruments.map((item, index) => (
        <div
          className={`instrument-section ${index === 1 || index === 3 || index === 5 ? 'dark' : 'light'}`}
          key={item.id}
          ref={el => (sectionRefs.current[index] = el)}
        >
          <div className={`instrument-img ${index % 2 === 0 ? 'right' : 'left'} img-${index}`}>
            <img src={item.image} alt={item.name} />
          </div>
          <div className="instrument-text">
            <h2>{item.name}</h2>
            <h3>{item.tagline}</h3>
            <p dangerouslySetInnerHTML={{ __html: boldNames(item.description) }}></p>
          </div>
        </div>
      ))}
    </section>
  );
};

const boldNames = (text) => {
  const jazzLegends = [
    'Miles Davis',
    'Louis Armstrong',
    'Charlie Parker',
    'John Coltrane',
    'Thelonious Monk',
    'Bill Evans',
    'Charles Mingus',
    'Ron Carter',
    'Max Roach',
    'Art Blakey',
    'J.J. Johnson',
    'Curtis Fuller',
  ];

  jazzLegends.forEach(name => {
    const regex = new RegExp(`(?<!<strong>)(${name})(?!</strong>)`, 'g');
    text = text.replace(regex, '<strong>$1</strong>');
  });
  return text;
};

export default ExplorePage;
