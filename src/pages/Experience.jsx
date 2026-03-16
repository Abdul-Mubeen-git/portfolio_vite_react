import React from 'react'

export default function Experience() {
  return (
    <section className="page">
      <h1>Experience</h1>
      <div className='card-row'>
        <div className="experience-item">
          <h3>Walmart - software developer engineer (SDE) contract via Wcc</h3>
          <p><strong>May 2025 – Nov 2025</strong> | Bengaluru, Karnataka</p>
          <ul>
            <li>Worked on International Marketplace: Orders & Returns, Ship with Walmart, and Label Services.</li>
            <li>Delivered 10+ features and enhancements across three core microservices (Order, Returns, Label), collaborating with cross-
              functional teams to meet sprint and release deadlines.</li>
            <li> Designed and implemented 12+ REST APIs and 4 GraphQL endpoints supporting integrations between internal and external
              systems.</li>
            <li>Improved automated test coverage from 75% to 90% by developing 150+ JUnit tests and WireMock-based functional tests,
              reducing regression issues in releases.</li>
            <li>Maintained CI/CD pipelines to support automated deployment of 4+ backend microservices, including implementing canary
              deployment strategies.</li>
              <li>Resolved production incidents using Splunk, Grafana, and Prometheus, reducing downtime by 15%.</li>
              <li>Developed Excel-based bulk upload processing in Java to handle 1,000+ records per upload, improving operational efficiency
                for order updates.</li>
              <li>Collaborated in Agile sprints for design discussions, code reviews, and on-call rotations (average response time: 30 minutes).</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Walmart - software developer engineer (SDE) contract via mthree</h3>
          <p><strong>Jan 2024 – May 2025</strong> | Bengaluru, Karnataka</p>
          <ul>
            <li>Developed scalable Spring Boot microservices supporting Walmart International Marketplace seller workflows.</li>
              <li>Built RESTful APIs with validation, exception handling, and versioning, improving service reliability and reducing downstream
                integration issues.</li>
              <li>Deployed backend Apis on Azure Cloud, improving scalability and query performance by 15%</li>
              <li>Applied Test Driven Development using JUnit and Mockito to improve unit testing and regression detection during feature
                releases.</li>
              <li>Collaborated with product, QA, and DevOps teams to deliver features end-to-end while participating in code reviews and
                production issue resolution.</li>
                <li>Developed REST APIs, optimized SQL queries (40% response time improvement).</li>
                <li>Deployed services to Azure App Services and used Blob Storage.</li>
              </ul>
            </div>
        </div>
    </section>
  )
}
