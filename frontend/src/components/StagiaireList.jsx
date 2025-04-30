import { useEffect, useState } from 'react';
import { getAllStagiaires, deleteStagiaire } from '../api/stagiaireService';

export default function StagiaireList({ onEdit, refresh }) {
  const [stagiaires, setStagiaires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getAllStagiaires();
        setStagiaires(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [refresh]);

  if (loading) return <p>Chargement stagiaires...</p>;
  if (error) return <p className="text-red-600">Erreur : {error}</p>;

  return (
    <div className="card">
      <h2>Liste des stagiaires</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Formation</th>
            <th>Date début</th>
            <th>Date fin</th>
            <th>Encadrant</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(Array.isArray(stagiaires) ? stagiaires : []).map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.nom} {s.prenom}</td>
              <td>{s.email}</td>
              <td>{s.telephone}</td>
              <td>{s.formation}</td>
              <td>{new Date(s.dateDebut).toLocaleDateString()}</td>
              <td>{new Date(s.dateFin).toLocaleDateString()}</td>
              <td>{s.encadrant?.nom} {s.encadrant?.prenom}</td>
              <td className="space-x-2">
                <button onClick={() => onEdit(s)} className="btn btn-secondary">Modifier</button>
                <button onClick={() => deleteStagiaire(s.id).then(() => onEdit(null))} className="btn btn-danger">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}