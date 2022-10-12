import api from "./api";

export async function getProfessionals(city) {
  return await api.get(`/professionals?city=${city}`);
}
