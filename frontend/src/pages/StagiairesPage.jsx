import { useState } from 'react';
import StagiaireForm from '../components/StagiaireForm';
import StagiaireList from '../components/StagiaireList';

export default function StagiairesPage() {
  const [current, setCurrent] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container">
      <h1 className="page-heading">Stagiaires</h1>
      <StagiaireForm current={current} onSaved={() => setRefresh(f => !f)} />
      <StagiaireList onEdit={setCurrent} refresh={refresh} />
    </div>
  );
}