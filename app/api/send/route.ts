import { EmailTemplate } from '../../[locale]/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend('re_VzFGwG6D_8V6ak8KUHsYsVdZLqXK5nDsw');

export async function POST(req: any) {
  try {

    const {option, name, phone, email, message} = await req.json()

    const { data, error } = await resend.emails.send({
      from: 'Contacto <onboarding@resend.dev>',
      to: ['dev.evada@gmail.com'],
      subject: option,
      react: EmailTemplate({name, phone, email, message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}