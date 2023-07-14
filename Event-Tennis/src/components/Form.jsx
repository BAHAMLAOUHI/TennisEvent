import React, { useState } from 'react';
import './Form.modules.css';
import Row from './Row';
import axios from 'axios';

function Form() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    var errorMessages = [];

    var telPattern = /^\d+$/;
    if (!telPattern.test(telephone)) {
      errorMessages.push("Le numéro de téléphone ne doit contenir que des nombres.");
    }

    var npPattern = /^[a-zA-Z\s]*$/;
    if (!npPattern.test(nom) || !npPattern.test(prenom)) {
      errorMessages.push("Le nom et prénom ne doivent contenir que des lettres et des espaces.");
    }

    var atIndex = email.indexOf("@");
    var dotIndex = email.lastIndexOf(".");
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
      errorMessages.push("L'adresse mail n'est pas valide.");
    }

    if (nom.trim() === "" || prenom.trim() === "") {
      errorMessages.push("Veuillez saisir votre nom et prénom.");
    }

    if (telephone.trim() === "") {
      errorMessages.push("Veuillez saisir votre numéro de téléphone.");
    }

    if (email.trim() === "") {
      errorMessages.push("Veuillez saisir votre adresse mail.");
    }

    const cvInput = document.getElementById("photo");
    if (cvInput.files.length === 0) {
      errorMessages.push("Veuillez déposer votre photo.");
    }

    if (errorMessages.length > 0) {
      errorMessages.forEach((errorMessage) => {
        alert(errorMessage);
      });
      return;
    }

    const user = new FormData();
    user.append('nom', nom);
    user.append('prenom', prenom);
    user.append('email', email);
    user.append('telephone', telephone);
    user.append('message', message);
    user.append('photo', cvInput.files[0]);

    try {
      await axios.post("http://localhost:8000/users/", user, {
        headers: {
          'Content-Type': 'multipart/form-data' // Définit le type de contenu de la requête en multipart/form-data
        }
      });

      setNom('');
      setPrenom('');
      setEmail('');
      setTelephone('');
      setMessage('');

      alert("Votre réponse a été envoyée.");
    } catch (error) {
      console.log(error);
      alert("Une erreur s'est produite lors de l'envoi de votre réponse.");
    }
  };

  return (
    <Row>
      <div className="form-content">
        <form className="colorful-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Nom:</label>
            <input
              required
              placeholder="Entrer votre nom"
              className="form-input"
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Prenom:</label>
            <input
              required
              placeholder="Entrer votre prénom"
              className="form-input"
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email:</label>
            <input
              required
              placeholder="Entrer votre email"
              className="form-input"
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="telephone">Téléphone:</label>
            <input
              required
              placeholder="Entrer votre numéro de téléphone"
              className="form-input"
              name="telephone"
              id="telephone"
              type="text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Avez-vous des problèmes de santé?</label>
            <textarea
              required
              placeholder="Entrer votre message"
              className="form-input"
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="photo">Déposer votre photo</label>
            <input type="file" id="photo" name="photo" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png, .jfif" />
          </div>
          <button className="form-button" type="submit">Submit</button>
        </form>
      </div>
    </Row>
  );
}

export default Form;
