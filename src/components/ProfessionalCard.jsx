import { useState } from "react";
import { Card } from "../styles/Components/ProfessionalCardStyle";
import ProfessionalInfos from "./modals/ProfInfos";

export default function ProfessionalCard({ name, pic, service, id }) {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <Card onClick={openModal}>
        <img src={pic} alt="profilePic" />
        <div>
          <p>{name}</p>
          <p>{service}</p>
        </div>
      </Card>
      {open ? (
        <ProfessionalInfos
          modalIsOpen={open}
          closeModal={() => closeModal()}
          professionalId={id}
        />
      ) : (
        ""
      )}
    </>
  );
}
