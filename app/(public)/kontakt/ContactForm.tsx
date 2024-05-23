"use client";

import { useToast } from "@/components/ui/use-toast";
import React, { useState } from "react";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone, message });
    toast({
      title: "Poruka poslana.",
    });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
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
  );
};

export default ContactForm;
