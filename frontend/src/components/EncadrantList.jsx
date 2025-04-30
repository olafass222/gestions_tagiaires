import { useEffect, useState } from 'react';
import { getAllEncadrants, deleteEncadrant } from '../api/encadrantService';

export default function EncadrantList({ onEdit, refresh }) {
  const [encadrants, setEncadrants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getAllEncadrants();
        setEncadrants(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [refresh]);

  if (loading) return <p>Chargement encadrants...</p>;
  if (error) return <p className="text-red-600">Erreur : {error}</p>;

  return (
    <div className="card">
      <h2>Liste des encadrants</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(Array.isArray(encadrants) ? encadrants : []).map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.nom} {e.prenom}</td>
              <td>{e.email}</td>
              <td>{e.telephone}</td>
              <td className="space-x-2">
                <button onClick={() => onEdit(e)} className="btn btn-secondary">Modifier</button>
                <button onClick={() => deleteEncadrant(e.id).then(() => onEdit(null))} className="btn btn-danger">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}