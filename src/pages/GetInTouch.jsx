import React, { useState } from "react";
import "../styles/GetInTouch.css";

export default function GetInTouch() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xvgwjzve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: formData.subject,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
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

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="glass-input"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="glass-input"
          rows="6"
        />

        <button type="submit" className="glass-btn" disabled={status === "sending"}>
          {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
        </button>
        
        {status === "success" && (
          <div className="form-message success">
            ✓ Message sent successfully! We'll get back to you soon.
          </div>
        )}
        
        {status === "error" && (
          <div className="form-message error">
            ✗ Failed to send message. Please try again or email directly to hodorali@fxzig.com
          </div>
        )}
      </form>
    </section>
  );
}