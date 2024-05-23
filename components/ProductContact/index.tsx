"use client";

import { useState } from "react";
import "./style.scss";
import ContactFormModal from "./ContactFormModal";
import { Product } from "@/types";
import { sendProductInquiry } from "@/app/api/sendProductInquiry";

type Props = {
  product: Product
};

const ProductContact = ({product}: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleContactButtonClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = async (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    product: string;
  }) => {
    await sendProductInquiry(formData)
    setModalOpen(false);
  
  };

  return (
    <>
      <div className="productContactButton" onClick={handleContactButtonClick}>
        <p>Pošalji upit</p>
      </div>
      <ContactFormModal
        product={product}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default ProductContact;
