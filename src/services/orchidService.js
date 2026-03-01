import axios from "../utils/axios.customize";

export const getOrchids = () => {
  return axios.get("/orchids");
};

export const getOrchidById = (id) => {
  return axios.get(`/orchids/${id}`);
};

export const createOrchid = (data) => {
  return axios.post("/orchids", data);
};

export const updateOrchid = (id, data) => {
  return axios.put(`/orchids/${id}`, data);
};

export const deleteOrchid = (id) => {
  return axios.delete(`/orchids/${id}`);
};
