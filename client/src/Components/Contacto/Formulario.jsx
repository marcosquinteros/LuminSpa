import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
    const form = useRef();
    // const [successMessage, setSuccessMessage] = useState('');
    
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_elkzilq', 'template_lfgx8ma', form.current, 'LhNhZm-e9mi7gab3M')
        .then((result) => {
            console.log(result.text);
            form.current.reset()
            // setSuccessMessage('Su mensaje fue enviado con éxito.');
        }, 
        (error) => {
            console.log(error.text);
            // setSuccessMessage('Hubo un error, intentelo nuevamente');
        });
    };

    // const mensaje = () => {
    //     toast.warn('🦄 Wow so easy!', {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         });
    // }

return (
    <div>
        
        <form className='formulario' ref={form} onSubmit={sendEmail}>
            <label className="texto-register-login"> Nombre Completo: </label>
            <input id= "input" type="text" name="user_name" className='form-control'/>
            <label className="texto-register-login"> Correo Electronico: </label>
            <input id= "input" type="email" name="user_email" className='form-control'/>
            <label className="texto-register-login"> Mensaje: </label>
            <textarea id='input' name="message" className='form-control'/>
            <input type="submit" value="Enviar" className='boton-submit'/>
        </form>
        <ToastContainer />
        {/* {successMessage && <p className="success-message">{successMessage}</p>} */}
        
    </div>
);
};

export default ContactUs

