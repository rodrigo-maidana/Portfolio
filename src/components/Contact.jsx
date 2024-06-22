// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contacto</h2>
            <p>¡Estoy disponible para cualquier consulta o colaboración! Puedes contactarme a través de los siguientes medios:</p>
            <ul>
                <li>Email: <a href="mailto:ro-maidana@hotmail.com">ro-maidana@hotmail.com</a></li>
                <li>WhatsApp: <a href="https://wa.me/595985717091" target="_blank">+595 985 717 091</a></li>
            </ul>

        </section>
    );
};

export default Contact;
