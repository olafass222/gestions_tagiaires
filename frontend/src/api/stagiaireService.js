import api from './axiosConfig';

export const getAllStagiaires = () =>
  api.get('/api/stagiaires/tous_les_stagiaires');

export const getStagiaireById = (id) =>
  api.get(`/api/stagiaires/stagiaire/${id}`);

export const createStagiaire = (data) =>
  api.post('/api/stagiaires/creer_un_stagiaire', data);

export const updateStagiaire = (id, data) =>
  api.put(`/api/stagiaires/mettre_a_jour_stagiaire/${id}`, data);

export const deleteStagiaire = (id) =>
  api.delete(`/api/stagiaires/delete_stagiaire/${id}`);