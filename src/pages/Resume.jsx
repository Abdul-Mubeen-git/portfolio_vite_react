import React from 'react'

export default function Resume() {
  return (
    <section className="page">
      <div className="resume-container">
        {/* Header */}
        <div className="resume-header">
          <h1>MUBEEN ABDUL</h1>
          <div className="contact-bar">
            <span>📧 mubeenabdul1999@gmail.com</span>
            <span>📱 +91 8008372473</span>
            <span>💼 <a href="https://linkedin.com/in/dev-mubeen-abdul" target="_blank" rel="noreferrer">linkedin.com/in/dev-mubeen-abdul</a></span>
            <span>💻 <a href="https://github.com/Abdul-Mubeen-git" target="_blank" rel="noreferrer">github.com/Abdul-Mubeen-git</a></span>
          </div>
        </div>

        {/* Summary */}
        <div className="resume-section">
          <h2>SUMMARY</h2>
          <div className="section-content">
            <p>
              Software Development Engineer with <strong>2+ years of experience</strong> building scalable backend systems and microservices using <strong>Java, Spring Boot, REST APIs, and PostgreSQL</strong>. Experience in designing high-availability services, handling distributed systems, and supporting production systems on scale. Contributed to enterprise platforms at Walmart Global Tech supporting large transaction workloads with a focus on <strong>system reliability, observability, and performance optimization</strong>. Skilled in <strong>Kafka, CI/CD pipelines, cloud platforms, and production monitoring using Splunk and Grafana</strong>. Interested in building scalable platforms and exploring <strong>AI-driven engineering solutions and automation</strong>.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="resume-section">
          <h2>EXPERIENCE</h2>
          <div className="section-content">
            <div className="experience-block">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>Software Development Engineer -- SDE</h3>
                  <p className="company"><strong>West Coast Consultancy – Client: Walmart Global Tech</strong></p>
                </div>
                <div className="experience-date">
                  <p>May 2025 – November 2025</p>
                  <p>Bengaluru, Karnataka</p>
                </div>
              </div>
              <div className="experience-details">
                <p><strong>Project:</strong> Walmart International Marketplace – Seller Center</p>
                <p><strong>Technologies:</strong> Java, Spring Boot, Microservices, Test Driven Development, REST APIs, Kafka, Docker, Azure</p>
                <ul>
                  <li>Delivered 10+ features and enhancements across three core microservices (Order, Returns, Label), collaborating with cross-functional teams to meet sprint and release deadlines.</li>
                  <li>Designed and implemented 12+ REST APIs and 4 GraphQL endpoints supporting integrations between internal and external systems.</li>
                  <li>Improved automated test coverage from 75% to 90% by developing 150+ JUnit tests and WireMock-based functional tests, reducing regression issues in releases.</li>
                  <li>Maintained CI/CD pipelines to support automated deployment of 4+ backend microservices, including implementing canary deployment strategies.</li>
                  <li>Resolved production incidents using Splunk, Grafana, and Prometheus, reducing downtime by 15%.</li>
                  <li>Developed Excel-based bulk upload processing in Java to handle 1,000+ records per upload, improving operational efficiency for order updates.</li>
                  <li>Collaborated in Agile sprints for design discussions, code reviews, and on-call rotations (average response time: 30 minutes).</li>
                </ul>
              </div>
            </div>

            <div className="experience-block">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>Java Developer</h3>
                  <p className="company"><strong>mthree – Client: Walmart Global Tech</strong></p>
                </div>
                <div className="experience-date">
                  <p>January 2024 – May 2025</p>
                  <p>Hyderabad, Telangana</p>
                </div>
              </div>
              <div className="experience-details">
                <p><strong>Project:</strong> Walmart International Marketplace – Seller Center</p>
                <p><strong>Technologies:</strong> Java, Spring Boot, Microservices, REST APIs, Cassandra, Kafka, Docker, Azure</p>
                <ul>
                  <li>Developed scalable Spring Boot microservices supporting Walmart International Marketplace seller workflows.</li>
                  <li>Built RESTful APIs with validation, exception handling, and versioning, improving service reliability and reducing downstream integration issues.</li>
                  <li>Deployed backend APIs on Azure Cloud, improving scalability and query performance by 15%.</li>
                  <li>Applied Test Driven Development using JUnit and Mockito to improve unit testing and regression detection during feature releases.</li>
                  <li>Collaborated with product, QA, and DevOps teams to deliver features end-to-end while participating in code reviews and production issue resolution.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="resume-section">
          <h2>EDUCATION</h2>
          <div className="section-content">
            <div className="education-block">
              <div className="education-header">
                <div className="education-title">
                  <h3>Rajiv Gandhi University of Knowledge and Technologies (RGUKT) IIIT</h3>
                  <p className="degree"><strong>Bachelor of Technology in Computer Science and Engineering | CGPA: 77.6%</strong></p>
                </div>
                <div className="education-date">
                  <p>July 2018 – September 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h2>SKILLS</h2>
          <div className="section-content">
            <div className="skills-list">
              <div className="skill-item">
                <strong>Programming:</strong> Java 8+, Core Java, OOP, Collections, Multi-threading
              </div>
              <div className="skill-item">
                <strong>Backend:</strong> Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs, Microservices
              </div>
              <div className="skill-item">
                <strong>Frontend:</strong> HTML5, CSS3, React, JavaScript
              </div>
              <div className="skill-item">
                <strong>Databases & Messaging:</strong> PostgreSQL, Cassandra, Apache Kafka
              </div>
              <div className="skill-item">
                <strong>Cloud & DevOps:</strong> Azure, AWS, Docker, Kubernetes, Jenkins, Git, Maven, CI/CD
              </div>
              <div className="skill-item">
                <strong>Observability:</strong> Splunk, Grafana, Prometheus, Logging, Debugging
              </div>
              <div className="skill-item">
                <strong>Development Practices:</strong> Agile/Scrum, Test Driven Development, Design Patterns
              </div>
              <div className="skill-item">
                <strong>Core CS:</strong> Data Structures, Algorithms, Operating Systems
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="resume-actions">
          <button className="resume-btn" onClick={() => window.print()}>
            🖨️ Print Resume
          </button>
          <button className="resume-btn" onClick={() => {
            const content = document.querySelector('.resume-container').innerText;
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Mubeen_Abdul_Resume.txt';
            a.click();
            URL.revokeObjectURL(url);
          }}>
            📄 Download as Text
          </button>
        </div>
      </div>
    </section>
  )
}
