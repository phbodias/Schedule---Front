import api from "./api";

export default async function signUpService(data) {
  return await api.post("/sign-up", data);
}
