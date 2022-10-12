import api from "./api";

export async function getProfessionalById(id) {
  return await api.get(`/professional/${id}`);
}
