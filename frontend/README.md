# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Gestion Stagiaires Frontend

Ce projet est le frontend pour l'application de gestion des stagiaires, développé avec **React** (Vite) et consommant une API Spring Boot.

## Table des matières

- [Installation](#installation)
- [Configuration](#configuration)
- [Scripts disponibles](#scripts-disponibles)
- [Architecture](#architecture)
- [Points clés](#points-clés)
- [Contribuer](#contribuer)

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/olafass222/gestions_tagiaires.git
   cd gestions_tagiaires/frontend
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

## Configuration

1. Copiez le fichier `.env` :
   ```bash
   cp .env.example .env
   ```
2. Modifiez `.env` pour pointer vers votre backend (par défaut `http://localhost:5000`) :
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

## Scripts disponibles

- **`npm run dev`** : démarre le serveur en mode développement sur le port 3002.
- **`npm run build`** : compile l'application pour la production dans le dossier `dist/`.
- **`npm run preview`** : sert le build de production en local sur le port 3002.

## Architecture

```
frontend/
├─ public/
│  └─ index.html
├─ src/
│  ├─ api/                # services Axios (stagiaires, encadrants, demandes)
│  ├─ components/         # formulaires et listes
│  ├─ pages/              # pages React (Accueil, Stagiaires, Encadrants, Demandes)
│  ├─ App.jsx             # routing global
│  ├─ main.jsx            # point d'entrée
│  └─ index.css           # styles globaux
└─ package.json
```

## Points clés

- **Routing** : `react-router-dom@6` pour la navigation SPA.
- **State local** : chaque page gère son état de rafraîchissement (`refresh`) pour reloader les listes.
- **Axios** : instance centrale en `src/api/axiosConfig.js` pour la base URL.
- **Vanilla CSS** : styles dans `src/index.css` pour un design simple et clair.

## Contribuer

1. Créez une branche : `git checkout -b feature/ma-fonctionnalite`
2. Faites vos modifications et tests.
3. Ouvrez une pull request.

Sentez-vous libre de suggérer des améliorations ou remonter des bugs !

