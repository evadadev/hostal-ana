import React from 'react'

interface Form {
    name: string, 
    email: string,
    phone: string, 
    message: string, 
    option: string, 
}

interface emailProps { 
    form: Form
}

export const EmailTemplate: React.FC<Readonly<emailProps>> = (props) => {
    const { form } = props;
    const body = `Nombre: ${form.name}\nEmail: ${form.email}\nTeléfono: ${form.phone}\nMensaje: ${form.message}`; 
    return (
        <div>
            <h1>{form.option}</h1>
            <div>{body}</div>
        </div>
    )
}


