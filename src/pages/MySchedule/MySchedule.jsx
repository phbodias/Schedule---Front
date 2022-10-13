import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { Container, Event, Scheduled, User } from "./MyScheduleStyle";

export default function MySchedule() {
  const [user] = useState(localStorage.getItem("userNameSchedule"));
  const [profilePic] = useState(localStorage.getItem("userPicSchedule"));

  const scheduled = [
    {
      professionalName: "Dr Cesar",
      address: "R. Blabla, nº59, Jardim Paineiras, Campinas - SP",
      date: "10/10",
      time: "9:30",
    },
    {
      professionalName: "Dr Cesar",
      address: "R. Blabla, nº59, Jardim Paineiras, Campinas - SP",
      date: "10/10",
      time: "9:30",
    },
    {
      professionalName: "Dr Cesar",
      address: "R. Blabla, nº59, Jardim Paineiras, Campinas - SP",
      date: "10/10",
      time: "9:30",
    },
    {
      professionalName: "Dr Cesar",
      address: "R. Blabla, nº59, Jardim Paineiras, Campinas - SP",
      date: "10/10",
      time: "9:30",
    },
    {
      professionalName: "Dr Cesar",
      address: "R. Blabla, nº59, Jardim Paineiras, Campinas - SP",
      date: "10/10",
      time: "9:30",
    },
    {
      professionalName: "Dr Cesar",
      address: "R. Blabla, nº59, Jardim Paineiras, Campinas - SP",
      date: "10/10",
      time: "9:30",
    },
    {
      professionalName: "Dr Cesar",
      address: "R. Blabla, nº59, Jardim Paineiras, Campinas - SP",
      date: "10/10",
      time: "9:30",
    },
    {
      professionalName: "Dr Cesar",
      address: "R. Blabla, nº59, Jardim Paineiras, Campinas - SP",
      date: "10/10",
      time: "9:30",
    },
  ];
  return (
    <Container>
      {user ? (
        <>
          <User>
            <img src={profilePic} alt="profile" />
            <p>{user}</p>
          </User>
          <Scheduled>
            {scheduled.map((event, index) => {
              return (
                <Event>
                  <p>Dia: {event.date}</p>
                  <p>Hora: {event.time}hrs</p>
                  <p>Profissional: {event.professionalName}</p>
                  <p>Endereço: {event.address}</p>
                </Event>
              );
            })}
          </Scheduled>
        </>
      ) : (
        <User>Para visualizar seus agendamentos, faça seu login</User>
      )}
      <Footer actualPage={"Schedule"} />
    </Container>
  );
}
