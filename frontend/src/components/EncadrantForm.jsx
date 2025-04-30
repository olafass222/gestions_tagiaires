import { useState, useEffect } from 'react';
import { createEncadrant, updateEncadrant } from '../api/encadrantService';

export default function EncadrantForm({ current, onSaved }) {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', telephone: '' });

  useEffect(() => {
    if (current) {
      setForm({
        nom: current.nom,
        prenom: current.prenom,
        email: current.email,
        telephone: current.telephone
      });
    }
  }, [current]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (current) await updateEncadrant(current.id, form);
      else await createEncadrant(form);
      setForm({ nom: '', prenom: '', email: '', telephone: '' });
      onSaved();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <h2>{current ? 'Modifier' : 'Ajouter'} Encadrant</h2>
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
        <button type="submit" className="btn btn-primary">
          {current ? 'Mettre à jour' : 'Ajouter'}
        </button>
      </form>
    </div>
  );
}