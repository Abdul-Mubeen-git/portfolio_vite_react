import React from 'react'

const skills = [
  'Core Java', 'Spring Boot', 'Microservices', 'REST APIs', 'PostgreSQL', 'MySQL',
  'Kafka', 'Docker', 'Jenkins', 'Kubernetes', 'JUnit & Mockito', 'Azure', 'AWS', 'Grafana', 'Prometheus', 'Splunk'
]

export default function Home(){
  return (
    <section className="page">
      <h1>Hi, I'm Mubeen</h1>
      <p className="lead">Java Back-End Developer — building resilient microservices and APIs.</p>

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
