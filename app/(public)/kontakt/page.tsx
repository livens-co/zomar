"use client";

import { useState } from "react";
import "./style.scss";

interface ContactPageProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit({ name, email, phone, message });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="contactPage">
      <div className="contactForm">
        <h3>Kontaktirajte nas</h3>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <p>Ime i prezime</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <p>Telefon</p>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="input">
            <p>Poruka</p>
            <textarea
              name="Poruka"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Pošalji</button>
        </form>
      </div>
      <div className="contactInfo">
        <h3>Adresa</h3>
        <div className="contactInfo-row">
          <p>Križevačka ulica 4A | 10340 Vrbovec</p>
          <p>Google maps</p>
        </div>
        <h3>Radno vrijeme</h3>
        <div className="contactInfo-row">
          <p>Ponedjeljak - Petak</p>
          <p>09:00 - 20:00</p>
        </div>
        <h3>Pišite nam</h3>
        <div className="contactInfo-row">
          <a href="mailto:info@zomar.hr">info@zomar.hr</a>
        </div>
        <h3>Nazovite nas</h3>
        <div className="contactInfo-row">
          <a href="tel:#">+385 1</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
