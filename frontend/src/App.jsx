// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StagiairesPage from './pages/StagiairesPage';
import EncadrantsPage from './pages/EncadrantsPage';
import DemandesPage from './pages/DemandesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stagiaires" element={<StagiairesPage />} />
          <Route path="/encadrants" element={<EncadrantsPage />} />
          <Route path="/demandes" element={<DemandesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
