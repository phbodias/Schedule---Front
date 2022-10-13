import { useEffect, useState } from "react";
import Modal from "react-modal";
import { getProfessionalById } from "../../../services/getProfessionalById";
import loadingGif from "../../../images/loadingGif.gif";
import {
  Address,
  Calendar,
  Card,
  Close,
  Container,
  Day,
  LoadingGif,
  Time,
  Times,
} from "./ProfModalStyle";

Modal.setAppElement("#root");

export default function ProfessionalInfos({
  modalIsOpen,
  closeModal,
  professionalId,
}) {
  const [loading, setLoading] = useState(true);
  const [professional, setProfessional] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const promise = await getProfessionalById(professionalId);
        setProfessional(promise.data);
        setLoading(false);
      } catch (error) {
        alert(
          `Erro ao carregar profissional: \n\n${error.response.status} - ${error.response.data}`
        );
      }
    }
    loadData();
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
        {!loading ? (
          <div>
            <Card>
              <img src={professional.profilePic} />
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
                  <div key={i}>
                    <Day>{date.date}</Day>
                    <Times>
                      {date.times.map((time, index) => {
                        return <Time key={index}>{time}</Time>;
                      })}
                    </Times>
                  </div>
                );
              })}
            </Calendar>
          </div>
        ) : (
          <LoadingGif>
            <img src={loadingGif} />
          </LoadingGif>
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
    backdropFilter: "blur(13.5px)",
    WebkitBackdropFilter: "blur(13.5px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
