'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <p className="thank-you-message">
          💌 Thanks for reaching out, {form.name}! I&apos;ll get back to you soon.
        </p>
      )}

      <style jsx>{`
        .contact-section {
          max-width: 600px;
          margin: 3rem auto;
          padding: 2rem;
          background: #3a0ca3;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        h1 {
          text-align: center;
          color: white;
          margin-bottom: 2rem;
          font-size: 2.25rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 0.75rem 1rem;
          border: 2px solid #f3d1e2;
          border-radius: 8px;
          font-size: 1rem;
          background: #fff;
          transition: border-color 0.3s;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #3a0ca3;
          outline: none;
        }

        .contact-form button {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          background-color: white;
          color: #3a0ca3;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s;
          font-weight: 600;
        }

        .contact-form button:hover {
          background-color: #c22574;
        }

        .thank-you-message {
          text-align: center;
          font-size: 1.25rem;
          color: #333;
          background-color: #f8f0fc;
          padding: 2rem;
          border-radius: 12px;
        }

        @media (max-width: 600px) {
          .contact-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
