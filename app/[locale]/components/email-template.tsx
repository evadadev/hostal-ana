import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, 
  phone, 
  email,
  message
}) => (
  <div>
    <p>Nombre: {name}</p>
    <p>Email: {phone}</p>
    <p>Teléfono: {email}</p>
    <p>Mensaje: {message}</p>
  </div>
);
