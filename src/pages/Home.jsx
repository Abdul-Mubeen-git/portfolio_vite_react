import React, { useState, useEffect } from 'react'

const skills = [
  'Core Java', 'Spring Boot', 'Microservices', 'REST APIs', 'PostgreSQL', 'MySQL',
  'Kafka', 'Docker', 'Jenkins', 'Kubernetes', 'JUnit & Mockito', 'Azure', 'AWS', 'Grafana', 'Prometheus', 'Splunk'
]

const typingNames = [
  'Abdul Mubeen .',
  'Java Back-End Developer .',
  'Familiar with Microservices .',
  'API Developer .',
  'Software Engineer .',
  'a Tech Enthusiast .',
  'Familiar with Spring Boot .',
  'a Problem Solver .'
];

const vibrantColors = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', 
  'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
  'linear-gradient(135deg, #13f1fc 0%, #0470dc 100%)', 
  'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'  
];

export default function Home(){
  const [nameIndex, setNameIndex] = useState(0);
  const [displayName, setDisplayName] = useState('');
  const [isNameDeleting, setIsNameDeleting] = useState(false);
  const [nameTypingSpeed, setNameTypingSpeed] = useState(150);
  const [currentColor, setCurrentColor] = useState(vibrantColors[0]);

  useEffect(() => {
    const currentName = typingNames[nameIndex];
    
    const handleNameTyping = () => {
      if (!isNameDeleting) {
        if (displayName.length < currentName.length) {
          setDisplayName(currentName.substring(0, displayName.length + 1));
          setNameTypingSpeed(120 + Math.random() * 80);
        } else {
          setTimeout(() => setIsNameDeleting(true), 2500);
        }
      } else {
        if (displayName.length > 0) {
          setDisplayName(currentName.substring(0, displayName.length - 1));
          setNameTypingSpeed(60);
        } else {
          setIsNameDeleting(false);
          const nextIndex = (nameIndex + 1) % typingNames.length;
          setNameIndex(nextIndex);
          setCurrentColor(vibrantColors[nextIndex % vibrantColors.length]);
          setNameTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleNameTyping, nameTypingSpeed);
    return () => clearTimeout(timer);
  }, [displayName, isNameDeleting, nameIndex, nameTypingSpeed]);
  return (
    <section className="page">
      <h1 className="hero-title">
        Hi, I'm{' '}
        <span
          className="typing-name"
          style={{ backgroundImage: currentColor }}>
          {displayName}<span
            className="typing-cursor-name"
            style={{ backgroundImage: currentColor }}>|</span>
        </span>
      </h1>

      <div className="card-row">
        <div className="card">
          <h3>Current Role</h3>
          <p>Java Back-End Developer at MThree / Walmart (May 2024 - Present)</p>
        </div>
        <div className="card">
          <h3>Contact</h3>
          <p>&#9993; mubeenabdul1999@gmail.com<br/>&#9990; +91 8008372473</p>
        </div>
        {skills_f()}
      </div>
    </section>
  )

  function skills_f(){
    return (
      <section >
        <h1>Skills</h1>
        <div className="skills-grid">
          {skills.map((s, i) => <span key={i} className="skill-pill">{s}</span>)}
        </div>
      </section>
    )
  }
}
