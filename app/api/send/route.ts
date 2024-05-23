import { ContactTemplate } from '@/components/EmailTemplates/ContactTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      message
    } = await req.json()

    let reactElement;

    reactElement = ContactTemplate({
      name,
      email,
      phone,
      message
    }) as React.ReactElement

    const data = await resend.emails.send({
      from: 'Zomar Interijeri <info@livens.co>',
      to: email,
      bcc: 'dominik@livens.co',
      subject: 'Upit zaprimljen',
      react: reactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
