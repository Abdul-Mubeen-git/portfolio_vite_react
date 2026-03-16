import React from 'react'

const SPathItem = ({ className, title, details, date }) => (
  <div className={className}>
    <h3>{title}</h3>
    <p>{details}</p>
    <div className="pointer-date">{date}</div>
  </div>
)

const education = [
  {
    className: "edu-item s-curve-top",
    title: "B.Tech — Computer Science & Engineering",
    details: "Rajiv Gandhi University of Knowledge and Technologies (RGUKT) — CGPA: 7.7 / 10.0 July 2018 – Sept 2022",
    date: "2018 - 2022"
  },
  {
    className: "edu-item s-curve-middle",
    title: "Pre-University Course (PUC)",
    details: "RGUKT — CGPA: 6.8 / 10.0 Sept 2016 – Apr 2018",
    date: "2016 - 2018"
  },
  {
    className: "edu-item s-curve-bottom",
    title: "Class 10 — SSC",
    details: "Board of Secondary Education, Andhra Pradesh — CGPA: 8.3 / 10.0",
    date: "2016"
  }
]

export default function Education() {
  return (
    <section className="page">
      <h1>Education</h1>
      <div className='education-s-path'>
        {education.map((edu, index) => (
          <SPathItem key={index} {...edu} />
        ))}
      </div>
    </section>
  )
}
