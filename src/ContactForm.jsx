import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import LiquidChrome from './components/LiquidChrome';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simuler l'envoi car les clés EmailJS ne sont pas configurées
    console.log('Données du formulaire soumises:', formData);
    alert('Message envoyé avec succès ! (simulation)');
    setFormData({ name: '', email: '', message: '' });

    // Quand EmailJS sera configuré, décommentez ce code :
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        console.error('FAILED...', err);
        alert('Échec de l\'envoi du message. Veuillez réessayer.');
      });
    */
  };

  return (
    <div className="contact-container">
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={0.1}
        amplitude={0.3}
        interactive={true}
      />
      <div className="login-box">
        <h2>Contactez-moi</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Nom</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label>Message</label>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm; 