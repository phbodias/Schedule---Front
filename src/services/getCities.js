import api from "./api";

export default async function getCities() {
  return await api.get("/cities", {});
}
