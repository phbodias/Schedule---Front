import { useEffect, useState } from "react";
import Modal from "react-modal";
import { getProfessionalById } from "../../../services/getProfessionalById";
import {
  Address,
  Calendar,
  Card,
  Close,
  Container,
  Day,
  Time,
  Times,
} from "./ProfModalStyle";

Modal.setAppElement("#root");

export default function ProfessionalInfos({
  modalIsOpen,
  closeModal,
  professionalId,
}) {
  const [professional, setProfessional] = useState(false);

  useEffect(() => {
    const promise = getProfessionalById(professionalId);

    promise
      .then((res) => {
        setProfessional(res.data);
      })
      .catch((error) => {
        alert(
          `Erro ao carregar profissional: \n\n${error.response.status} - ${error.response.data}`
        );
        //setLoading(false);
      });
  }, [modalIsOpen]);

  const availables = [
    {
      date: "10/10",
      times: [
        "9:30",
        "10:00",
        "10:30",
        "15:00",
        "9:30",
        "10:00",
        "10:30",
        "15:00",
      ],
    },
    { date: "11/10", times: ["9:30", "10:00", "10:30"] },
    { date: "13/10", times: ["9:30", "10:00", "10:30", "15:00"] },
    {
      date: "15/10",
      times: ["9:30", "10:00", "10:30", "15:00", "10:30", "15:00"],
    },
  ];

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <Container>
        <Close>
          <ion-icon onClick={closeModal} name="close-circle-outline"></ion-icon>
        </Close>
        {professional ? (
          <div>
            <Card>
              <img src={professional.profilePic} alt="profilePic" />
              <div>
                <p>{professional.name}</p>
                <p>{professional.Services.service}</p>
              </div>
            </Card>
            <hr size={1} color={"#ebe8e8"} />
            <Address>
              <p>
                <b>Endereço: </b>
                {professional.address}, {professional.City.city}
              </p>
            </Address>
            <hr size={1} color={"#ebe8e8"} />
            <b>Selecione o dia e horário desejado:</b>
            <Calendar>
              {availables.map((date, i) => {
                return (
                  <div>
                    <Day>{date.date}</Day>
                    <Times>
                      {date.times.map((time, index) => {
                        return <Time>{time}</Time>;
                      })}
                    </Times>
                  </div>
                );
              })}
            </Calendar>
          </div>
        ) : (
          "dsadas"
        )}
      </Container>
    </Modal>
  );
}

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    borderRadius: "10px",
    boxSizing: "border-box",
    background: "rgba(255, 255, 255, 0.01)",
    "backdrop-filter": "blur(13.5px)",
    "-webkit-backdrop-filter": "blur(13.5px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
