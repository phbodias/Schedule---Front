import Modal from "react-modal";
import {
  Address,
  Calendar,
  Card,
  Close,
  Container,
  Day,
  Time,
  Times,
} from "../../styles/ProfModalStyle";

Modal.setAppElement("#root");

export default function ProfessionalInfos({
  modalIsOpen,
  closeModal,
  professionalId,
}) {
  const prof = {
    name: "Pedro Dias",
    pic: "data:image/jpeg;base64,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",
    service: "Web Freelancer",
  };

  const availables = [
    {
      date: "10/10",
      times: ["9:30", "10:00", "10:30", "15:00", "9:30", "10:00", "10:30", "15:00"],
    },
    { date: "11/10", times: ["9:30", "10:00", "10:30"] },
    { date: "13/10", times: ["9:30", "10:00", "10:30", "15:00"] },
    { date: "15/10", times: ["9:30", "10:00", "10:30", "15:00", "10:30", "15:00"] },
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
        <Card>
          <img src={prof.pic} alt="profilePic" />
          <div>
            <p>{prof.name}</p>
            <p>{prof.service}</p>
          </div>
        </Card>
        <hr size={1} color={"#ebe8e8"} />
        <Address>
          <p>
            <b>Endereço: </b> R. Blabla, nº59, Jardim Paineiras, Campinas - SP
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
