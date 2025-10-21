import React from 'react'

const sampleProjects = [
  {
    title: 'Marketplace Orders Service',
    desc: 'Microservice to manage orders and returns with robust validation and Kafka-based events.'
  },
  {
    title: 'Ship with Walmart Integration',
    desc: 'Service to generate shipping labels and track fulfilment status across regions.'
  },
  {
    title: 'E-comm Demo App',
    desc: 'Full-stack demo built with Spring Boot and React (internship project).'
  }
]

export default function Projects(){
  return (
    <section className="page">
      <h1>Projects</h1>
      <div className="card-row">
        {sampleProjects.map((p, i) => (
          <article className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="meta">Technologies: Java, Spring Boot, Kafka, Docker, Azure</div>
          </article>
        ))}
      </div>
    </section>
  )
}
