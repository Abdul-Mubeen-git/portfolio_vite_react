import React from 'react'

const SPathItem = ({ className, title, period, location, date, children }) => (
  <div className={className}>
    <h3>{title}</h3>
    <p><strong>{period}</strong> | {location}</p>
    <div className="pointer-date">{date}</div>
    <ul>{children}</ul>
  </div>
)

const experiences = [
  {
    className: "experience-item s-curve-top",
    title: "Walmart - Software Developer Engineer (SDE) contract via Wcc",
    period: "May 2025 – Nov 2025",
    location: "Bengaluru, Karnataka",
    date: "May 2025 – Nov 2025",
    points: [
      "Worked on International Marketplace: Orders & Returns, Ship with Walmart, and Label Services.",
      "Delivered 10+ features and enhancements across three core microservices (Order, Returns, Label), collaborating with cross-functional teams to meet sprint and release deadlines.",
      "Designed and implemented 12+ REST APIs and 4 GraphQL endpoints supporting integrations between internal and external systems.",
      "Improved automated test coverage from 75% to 90% by developing 150+ JUnit tests and WireMock-based functional tests, reducing regression issues in releases.",
      "Maintained CI/CD pipelines to support automated deployment of 4+ backend microservices, including implementing canary deployment strategies.",
      "Resolved production incidents using Splunk, Grafana, and Prometheus, reducing downtime by 15%.",
      "Developed Excel-based bulk upload processing in Java to handle 1,000+ records per upload, improving operational efficiency for order updates.",
      "Collaborated in Agile sprints for design discussions, code reviews, and on-call rotations (average response time: 30 minutes)."
    ]
  },
  {
    className: "experience-item s-curve-middle",
    title: "Walmart - Software Developer Engineer (SDE) contract via mthree",
    period: "Jan 2024 – May 2025",
    location: "Bengaluru, Karnataka",
    date: "Jan 2024 – May 2025",
    points: [
      "Developed scalable Spring Boot microservices supporting Walmart International Marketplace seller workflows.",
      "Built RESTful APIs with validation, exception handling, and versioning, improving service reliability and reducing downstream integration issues.",
      "Deployed backend APIs on Azure Cloud, improving scalability and query performance by 15%.",
      "Applied Test Driven Development using JUnit and Mockito to improve unit testing and regression detection during feature releases.",
      "Collaborated with product, QA, and DevOps teams to deliver features end-to-end while participating in code reviews and production issue resolution.",
      "Developed REST APIs, optimized SQL queries (40% response time improvement).",
      "Deployed services to Azure App Services and used Blob Storage."
    ]
  }
]

export default function Experience() {
  return (
    <section className="page">
      <h1>Experience</h1>
      <div className='experience-s-path'>
        {experiences.map((exp, index) => (
          <SPathItem key={index} {...exp}>
            {exp.points.map((point, i) => <li key={i}>{point}</li>)}
          </SPathItem>
        ))}
      </div>
    </section>
  )
}
