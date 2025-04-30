import { useEffect, useState } from 'react';
import { getAllDemandes, getDemandesByStatut, acceptDemande, rejectDemande } from '../api/demandeService';

export default function DemandeList({ refresh, statutFilter }) {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = statutFilter
          ? await getDemandesByStatut(statutFilter)
          : await getAllDemandes();
        setDemandes(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [refresh, statutFilter]);

  if (loading) return <p>Chargement demandes...</p>;
  if (error) return <p className="text-red-600">Erreur : {error}</p>;

  return (
    <div className="card">
      <h2>Liste des demandes</h2>
      <table>
        <thead><tr><th>ID</th><th>Nom</th><th>Prénom</th><th>Statut</th><th>Actions</th></tr></thead>
        <tbody>
          {(Array.isArray(demandes) ? demandes : []).map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.nom}</td>
              <td>{d.prenom}</td>
              <td>{d.statut}</td>
              <td className="space-x-2">
                <button onClick={() => acceptDemande(d.id).then(() => {})} className="btn btn-success">Accepter</button>
                <button onClick={() => rejectDemande(d.id).then(() => {})} className="btn btn-danger">Refuser</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}