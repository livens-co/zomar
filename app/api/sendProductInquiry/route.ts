import { ProductInquiryTemplate } from "@/components/EmailTemplates/ProductInquiryTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      message,
      product
    } = await req.json();

    let reactElement;

    reactElement = ProductInquiryTemplate({
      name,
      email,
      phone,
      message,
      product
    }) as React.ReactElement;

    const data = await resend.emails.send({
      from: "Zomar Interijeri <hello@livens.co>",
      to: email,
      bcc: "dominik@livens.co",
      subject: "Upit zaprimljen",
      react: reactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
