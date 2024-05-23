"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { IoClose } from "react-icons/io5";
import { useToast } from "../ui/use-toast";

interface ContactFormModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    product: string;
  }) => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  product,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Poruka poslana.",
    });
    onSubmit({ name, email, phone, message, product: product.title });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="close" onClick={onClose}>
          <IoClose />
        </div>
        <h2>
          Zanima Vas proizvod <span>{product.title}</span>?
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ime"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefon"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            placeholder="Poruka"
          />

          <button type="submit">Pošalji poruku</button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
