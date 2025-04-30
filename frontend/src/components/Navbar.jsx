import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Gestion Stage</h1>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/stagiaires">Stagiaires</Link></li>
          <li><Link to="/encadrants">Encadrants</Link></li>
          <li><Link to="/demandes">Demandes</Link></li>
        </ul>
      </div>
    </nav>
  );
}