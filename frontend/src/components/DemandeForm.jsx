import { useState } from 'react';
import { createDemande } from '../api/demandeService';

export default function DemandeForm({ onSaved }) {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', formation: '', motivation: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDemande(form);
      setForm({ nom: '', prenom: '', email: '', formation: '', motivation: '' });
      onSaved();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <h2>Nouvelle demande de stage</h2>
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
          <label>Formation</label>
          <input name="formation" value={form.formation} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Motivation</label>
          <textarea name="motivation" value={form.motivation} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
);
}