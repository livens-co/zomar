import * as React from "react";

interface ProductInquiryTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  product: string;
}

export const ProductInquiryTemplate: React.FC<
  Readonly<ProductInquiryTemplateProps>
> = ({ name, email, phone, message, product }) => (
  <div>
    <p>
      Pozdrav, zaprimili smo Vaš upit te ćemo na njega odgovoriti u što kraćem
      roku!
    </p>
    <p>Ime:{name},</p>
    <p>Email: {email},</p>
    <p>Mobitel: {phone},</p>
    <p>Proizvod: {product},</p>
    <p>Poruka: {message}</p>
  </div>
);
