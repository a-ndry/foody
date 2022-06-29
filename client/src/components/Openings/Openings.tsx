import { Container } from "react-bootstrap";
import Separator from "../Separator/Separator";
import SectionHeading from "../Typography/SectionHeading";
import "./Openings.css";

const Openings = () => {
  return (
    <div id="openings" className="py-5 mb-4 text-white text-center">
      <Container className="pt-5 pb-4">
        <SectionHeading variant="light">Openings Hour</SectionHeading>
        <Separator />
        <h6 className="day fw-normal text-uppercase mt-5">
          WE ARE OPEN FOR 7 DAYS A WEEK
        </h6>
        <p className="office fs-3">San Francisco Office</p>
        <p>8488 Street, Lake 383 San Francisco</p>
        <p>Phone: 0090 3838 7686 </p>
        <p>Email: foody@gmail.com</p>
        <p>7:00 AM to 12:00 AM</p>
      </Container>
    </div>
  );
};

export default Openings;
