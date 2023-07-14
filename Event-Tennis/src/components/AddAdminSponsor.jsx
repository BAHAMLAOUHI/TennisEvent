// AddAdminSponsor.jsx

import React, { useState, useEffect } from 'react';
import './Form.modules.css';
import './Admin.modules.css';

import axios from 'axios';
import { useParams } from "react-router-dom"

function AddAdminSponsor() {
  const [imageUrl, setImageUrl] = useState('');
  const [sponsorId, setSponsorId] = useState('');
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get('http://localhost:8000/sponsors');
        setSponsors(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSponsors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageUrl.trim() === '') {
      alert("Veuillez saisir l'URL de l'image.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/sponsors/", { image: imageUrl });

      setImageUrl('');

      alert("Sponsor ajouté.");
    } catch (error) {
      console.log(error);
      alert("Une erreur s'est produite lors de l'ajout.");
    }
  };
  console.log(sponsorId)

 
  const handleDeleteSponsor = async (sponsorId) => {
    try {
      await axios.delete(`http://localhost:8000/sponsors/${sponsorId}`);
  
      alert("Sponsor supprimé.");
  
      // Mettre à jour la liste des sponsors
      const updatedSponsors = sponsors.filter(sponsor => sponsor._id !== sponsorId);
      setSponsors(updatedSponsors);
    } catch (error) {
      console.log(error);
      alert("Une erreur s'est produite lors de la suppression du sponsor.");
    }
  };
  

  return (
    <div className="Contact">
       <div>
        <h2>Liste des sponsors</h2>
        {sponsors.map((sponsor) => (
          <div key={sponsor._id} className="Contact1">
            <img src={sponsor.image}  className="image-admin" alt="Sponsor" />
            <button className="bouton" onClick={() => handleDeleteSponsor(sponsor._id)}>Supprimer</button>

          </div>
        ))}
      </div>
      <form className="colorful-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="imageUrl">URL de l'image du sponsor:</label>
          <input
            required
            placeholder="URL de l'image"
            className="form-input"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button className="form-button" type="submit">Ajouter</button>
      </form>
      

      <h3>Espace admin</h3>
    </div>
  )
}

export default AddAdminSponsor;
