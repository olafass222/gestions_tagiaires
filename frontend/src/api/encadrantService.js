import api from './axiosConfig';

export const getAllEncadrants = () =>
  api.get('/api/encadrants/tous_les_encadrants');

export const getEncadrantById = (id) =>
  api.get(`/api/encadrants/recuperer_un_encadrant/${id}`);

export const createEncadrant = (data) =>
  api.post('/api/encadrants/creer_un_encadrant', data);

export const updateEncadrant = (id, data) =>
  api.put(`/api/encadrants/mettre_a_jour_encadrant/${id}`, data);

export const deleteEncadrant = (id) =>
  api.delete(`/api/encadrants/supprimer_encadrant/${id}`);