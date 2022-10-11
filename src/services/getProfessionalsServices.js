import api from "./api";

export async function getMany(city) {
  return await api.get(`/professionals?city=${city}`);
}
