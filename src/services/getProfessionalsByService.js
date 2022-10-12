import api from "./api";

export async function getProfessionalByServices(serviceId, cityId) {
  return await api.get(`/professionals/${serviceId}?city=${cityId}`);
}
