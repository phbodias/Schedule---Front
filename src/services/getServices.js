import api from "./api";

export default async function getServices() {
  return await api.get("/services", {});
}
