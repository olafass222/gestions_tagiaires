import { useState, useEffect } from 'react';
import { getAllEncadrants } from '../api/encadrantService';
import { createStagiaire, updateStagiaire } from '../api/stagiaireService';

export default function StagiaireForm({ current, onSaved }) {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    formation: '',
    dateDebut: '',
    dateFin: '',
    encadrantId: ''
  });
  const [encadrants, setEncadrants] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllEncadrants();
        setEncadrants(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (current) {
      setForm({
        nom: current.nom,
        prenom: current.prenom,
        email: current.email,
        telephone: current.telephone,
        formation: current.formation,
        dateDebut: current.dateDebut?.split('T')[0] || '',
        dateFin: current.dateFin?.split('T')[0] || '',
        encadrantId: current.encadrant?.id || ''
      });
    }
  }, [current]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (current) await updateStagiaire(current.id, form);
      else await createStagiaire(form);
      setForm({ nom: '', prenom: '', email: '', telephone: '', formation: '', dateDebut: '', dateFin: '', encadrantId: '' });
      onSaved();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <h2>{current ? 'Modifier' : 'Ajouter'} Stagiaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom</label>
          <input name="nom" value={form.nom} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Prénom</label>
          <input name="prenom" value={form.prenom} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Téléphone</label>
          <input name="telephone" value={form.telephone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Formation</label>
          <input name="formation" value={form.formation} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date début</label>
          <input type="date" name="dateDebut" value={form.dateDebut} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date fin</label>
          <input type="date" name="dateFin" value={form.dateFin} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Encadrant</label>
          <select name="encadrantId" value={form.encadrantId} onChange={handleChange}>
            <option value="">-- Choisir --</option>
            {(Array.isArray(encadrants) ? encadrants : []).map(e => (
              <option key={e.id} value={e.id}>{e.nom} {e.prenom}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {current ? 'Mettre à jour' : 'Ajouter'}
        </button>
      </form>
    </div>
  );
}