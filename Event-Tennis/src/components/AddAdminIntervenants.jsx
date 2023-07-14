import React, { useState, useEffect } from 'react';
import './Admin.modules.css';
import './Form.modules.css';

import axios from 'axios';

function AddAdminIntervenants
() {
  const [participants, setParticipants] = useState([]);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get('http://localhost:8000/participants');
        setParticipants(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchParticipants();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nom.trim() === '' || prenom.trim() === '' || email.trim() === '' || telephone.trim() === '') {
      alert("Veuillez saisir tous les champs requis.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/participants/", {
        nom: nom,
        prenom: prenom,
        email: email,
        telephone: telephone,
        description: description
      });

      setNom('');
      setPrenom('');
      setEmail('');
      setTelephone('');
      setDescription('');

      alert("Participant ajouté.");
    } catch (error) {
      console.log(error);
      alert("Une erreur s'est produite lors de l'ajout.");
    }
  };

  const handleDelete = async (participantId) => {
    try {
      await axios.delete(`http://localhost:8000/participants/${participantId}`);

      alert("Participant supprimé.");

      // Mettre à jour la liste des participants
      const updatedParticipants = participants.filter(participant => participant._id !== participantId);
      setParticipants(updatedParticipants);
    } catch (error) {
      console.log(error);
      alert("Une erreur s'est produite lors de la suppression du participant.");
    }
  };

  return (
    <div className="Contact">
      <div>
        <h2>Liste des participants</h2>
        {participants.map((participant) => (
          <div key={participant._id}>
            <img src={participant.prenom} className="image-admin" alt="Participant" />
            <h4>{participant.nom}</h4>
            <p>{participant.email}</p>
            <p>{participant.telephone}</p>
            <p>{participant.description}</p>
            <button className="bouton" onClick={() => handleDelete(participant._id)}>Supprimer</button>
          </div>
        ))}
      </div>
      <form className="colorful-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="nom">Nom:</label>
          <input
            required
            placeholder="Nom"
            className="form-input"
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="prenom">Prénom:</label>
          <input
            required
            placeholder="Prénom"
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
            placeholder="Email"
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="telephone">Téléphone:</label>
          <input
            required
            placeholder="Téléphone"
            className="form-input"
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="description">Description:</label>
          <textarea
            placeholder="Description"
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="form-button" type="submit">Ajouter</button>
      </form>

      <h3>Espace admin</h3>
    </div>
  );
}

export default AddAdminIntervenants;
