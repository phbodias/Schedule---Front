import api from "./api";

export default async function signInService(data) {
  return await api.post("/sign-in", data);
}
