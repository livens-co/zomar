"use client";

import { sendEmail } from "@/app/api/sendEmail";
import "./style.scss";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const handleFormSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    await sendEmail(formData);

  };

  return (
    <div className="contactPage">
      <div className="contactForm">
        <h3>Kontaktirajte nas</h3>
        <ContactForm onSubmit={handleFormSubmit}/>
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
