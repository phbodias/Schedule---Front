import Footer from "../components/Footer";
import { Container, Event, Scheduled, User } from "../styles/MySchedule";

export default function MySchedule() {
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
      <User>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcAdwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADkQAAICAQIEAQYLCQAAAAAAAAABAgMEBRESITFRQVJhcYGRwRQjQlRicpKhsdHhExUiMjQ1c7Lw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EAAAAABHycyjGXxk/4vCK5sq79ZslyohGK7y5sC8BmZ5+VPrfJfV5fgePhWT84t+2wNSDMw1DLh0vk/rbMmUazJPa+pNeVD8gLoHHHyaciO9U0+68V6jsAAAAAAAAAKfUNUabqxX6Z/kNYzmm8el/Xa/AqAPrbbbbbb6tnxJt7L1AvdIwo11Rvmt7JrdfRQEKjSL7IqU3GtPwfN+w7fuSXzhfY/UuQBnr9KyalvHaxfR6+wg+ZmvKXWsThl8JguT5TS79wKyE5VyUoScZLo0y607U1c1Vfsp+EvCX6lGANeCt0nNd8f2Nr+MiuT8pFkAAAAj52QsbGlZ8rpFeckFJrtu90KV0iuJ+lgVkm225Pdt7tnwAAlu0u/I10UoxUV0S2MpSnK6Cit25LkawAAABwzYKeJdF+MGdzxem6ZpLduLW3qAyYHTkwB6qslVZGyD2lF7o1NFsbqYWR6SW/oMoXWg2712Uv5L4l6/++8C1AAAzOoy4865/S29nI0xlsz+rv/yS/EDiAAOuJLgyqZdpo1RkN9uhosDKeTRxJNSi+FrzgTQc957+PsC49tmB7ckuok+FNvojntLxXQharlyx6nUk3KyLSfZAUTfE2+/MD1AAT9Fnw5yXlRa9/uIBL0n+41ev/VgaQAADNanDgz7V3e/tNKUuvU7SruS6rhl7veBVAAAWmhXKN06m/wCdbr0oqyz0TGcrfhDe0YbpLbq9gLwAADO6vcrcxxj0rXD6/E0RndWxpUZDs33ja3JeZ9gIQAAFhokOLN4vCMGyvLzQqeCidrXOb2XoQFmAABxy6FkY86n4rk+zOwAyU4SrnKE1tKL2aPJe6rgO/a2lb2dGvKOGLo8m1LJkkvIi/eBXY2PPJtVda9L8F6TSYlEcbHhVHnw+PdnSuuFcVGEVGK8EegAAAEbPxVl0cG6Uk94skgDJ3VTpsddi4ZL7zwau+mu+twsinFlPk6PbDeVE1OPZ8mBAx6ZZF0aodZPr2Xc1FVcaq4wgtoxWyImmYSxa+Keztl18y7E4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
          alt="profile"
        />
        <p>Nome</p>
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
      <Footer actualPage={"Schedule"} />
    </Container>
  );
}
