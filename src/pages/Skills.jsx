import React from 'react'

const skills = [
  'Core Java', 'Spring Boot', 'Microservices', 'REST APIs', 'PostgreSQL', 'MySQL',
  'Kafka', 'Docker', 'Jenkins', 'Kubernetes', 'JUnit & Mockito', 'Azure', 'AWS', 'Grafana', 'Prometheus', 'Splunk'
]

export default function Skills(){
  return (
    <section >
      <h1>Skills</h1>
      <div className="skills-grid">
        {skills.map((s, i) => <span key={i} className="skill-pill">{s}</span>)}
      </div>
    </section>
  )
}
