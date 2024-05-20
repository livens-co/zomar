"use client";

import { useState } from "react";
import "./style.scss";
import ContactFormModal from "./ContactFormModal";
import { Product } from "@/types";

type Props = {
  product: Product
};

const ProductContact = ({product}: Props) => {
  const [isModalOpen, setModalOpen] = useState(true);

  const handleContactButtonClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = async (formData: {
    email: string;
    message: string;
    productTitle: string;
  }) => {
    // await sendContactEmail(formData);
    setModalOpen(false);
    console.log(formData)
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
