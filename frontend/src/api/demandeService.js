import api from './axiosConfig';

export const getAllDemandes = () =>
  api.get('/api/demande-de-stage/toutes_les_demandes');

export const getDemandesByStatut = (statut) =>
  api.get(`/api/demande-de-stage/statut/${statut}`);

export const createDemande = (data) =>
  api.post('/api/demande-de-stage/creer_une_demande', data);

export const acceptDemande = (id) =>
  api.put(`/api/demande-de-stage/accepter/${id}`);

export const rejectDemande = (id) =>
  api.put(`/api/demande-de-stage/refuser/${id}`);