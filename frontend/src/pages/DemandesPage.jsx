import { useState, useEffect } from 'react';
import DemandeForm from '../components/DemandeForm';
import DemandeList from '../components/DemandeList';

const STATUTS = [
  { value: '', label: 'Tous' },
  { value: 'EN_ATTENTE', label: 'En attente' },
  { value: 'ACCEPTEE', label: 'Acceptée' },
  { value: 'REFUSEE', label: 'Refusée' }
];

export default function DemandesPage() {
  const [refresh, setRefresh] = useState(false);
  const [statutFilter, setStatutFilter] = useState('');

  useEffect(() => {
    setRefresh(f => !f);
  }, [statutFilter]);

  return (
    <div className="container">
      <h1 className="page-heading">Demandes</h1>

      <div className="form-group">
        <label>Filtrer par statut</label>
        <select
          value={statutFilter}
          onChange={e => setStatutFilter(e.target.value)}
        >
          {STATUTS.map(s => (
            <option key={s.value || 'all'} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <DemandeForm onSaved={() => setRefresh(f => !f)} />
      <DemandeList refresh={refresh} statutFilter={statutFilter} />
    </div>
  );
}