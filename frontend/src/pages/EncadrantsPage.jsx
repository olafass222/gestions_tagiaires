import { useState } from 'react';
import EncadrantForm from '../components/EncadrantForm';
import EncadrantList from '../components/EncadrantList';

export default function EncadrantsPage() {
  const [current, setCurrent] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container">
      <h1 className="page-heading">Encadrants</h1>
      <EncadrantForm current={current} onSaved={() => setRefresh(f => !f)} />
      <EncadrantList onEdit={setCurrent} refresh={refresh} />
    </div>
  );
}