import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');
    
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_elkzilq', 'template_lfgx8ma', form.current, 'LhNhZm-e9mi7gab3M')
        .then((result) => {
            console.log(result.text);
            form.current.reset()
            setSuccessMessage('Su mensaje fue enviado con éxito.');
        }, 
        (error) => {
            console.log(error.text);
            setSuccessMessage('Hubo un error, intentelo nuevamente');
        });
    };

return (
    <div>
        
        <form className='formulario' autoComplete="off" ref={form} onSubmit={sendEmail}>
            <label className="formulario-label"> Nombre Completo: </label>
            <input type="text" name="user_name" className='input-form'/>
            <label> Correo Electronico: </label>
            <input type="email" name="user_email" className='input-form'/>
            <label> Mensaje: </label>
            <textarea name="message" className='mensaje-form'/>
            <input type="submit" value="Enviar" className="btn lumin-btn"/>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
);
};

export default ContactUs

