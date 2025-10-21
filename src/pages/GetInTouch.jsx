import React, { useState } from "react";
import "../styles/GetInTouch.css";

export default function GetInTouch() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! Check console for demo output.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="page">
      <h1>Get in touch</h1>
      <p className="lead">
        I'm always open to connecting! Whether you have a question, opportunity, or just want to say hi, feel free to reach out.
      </p>
      <form className="contact-form get-in-touch" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="glass-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="glass-input"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="glass-input"
          rows="6"
        />

        <button type="submit" className="glass-btn">
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
}