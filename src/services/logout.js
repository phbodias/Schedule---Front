export function logout() {
  localStorage.removeItem("tokenSchedule");
  localStorage.removeItem("userNameSchedule");
  localStorage.removeItem("userPicSchedule");
}
