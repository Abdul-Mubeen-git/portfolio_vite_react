import React from 'react'

export default function Experience(){
  return (
    <section className="page">
      <h1>Experience</h1>
      <div className='card-row'>
        <div className="experience-item">
        <h3>Java Back-End Developer — WCC & mthree [ client - Walmart ]</h3>
        <p><strong>May 2024 – Present</strong> | Bengaluru, Karnataka</p>
        <ul>
          <li>Worked on International Marketplace: Orders & Returns, Ship with Walmart, and Label Services.</li>
          <li>Improved test coverage by 35% using unit and integration tests.</li>
          <li>Monitored system health with Grafana, Prometheus, and Splunk.</li>
          <li>Automated deployments with Jenkins and Git, reducing deployment issues by 20%.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Software Engineering Intern — Wiley Edge</h3>
        <p><strong>Feb 2024 – Apr 2024</strong> | Hyderabad, Telangana</p>
        <ul>
          <li>Developed REST APIs, optimized SQL queries (40% response time improvement).</li>
          <li>Deployed services to Azure App Services and used Blob Storage.</li>
        </ul>
      </div>
      </div>
    </section>
  )
}
