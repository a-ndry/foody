import { Col, Container, Row } from "react-bootstrap";
import Icon from "../Icon/Icon";

const ContactDetail = () => {
  return (
    <div
      className="text-center text-white py-5"
      style={{ background: "#d62828" }}
    >
      <Container>
        <Row xs={1} md={2}>
          <Col className="py-5">
            <h3>Contact Detail</h3>
            <p className="mb-2">8488 Street, Lake 383 San Francisco</p>
            <p className="mb-2">Phone: 0090 3838 7686</p>
            <p className="mb-2">
              <span>Email: </span>
              <a
                href="mailto:foody@gmail.com"
                className="text-reset text-decoration-none"
              >
                foody@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <span>Website: </span>
              <a
                href="https://www.foody.com"
                className="text-reset text-decoration-none"
              >
                www.foody.com
              </a>
            </p>
          </Col>
          <Col className="py-5">
            <h3>Follow Us</h3>
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              recusandae deserunt officiis provident molestias, quo, temporibus
              adipisci eum facere amet repellat ullam corporis ut vel.
            </p>
            <div>
              <Icon
                href="https://www.facebook.com"
                name="facebook"
                variant="light"
              />
              <Icon
                href="https://www.twitter.com"
                name="twitter"
                variant="light"
              />
              <Icon
                href="https://www.instagram.com"
                name="instagram"
                variant="light"
              />
              <Icon
                href="https://www.pinterest.com"
                name="pinterest"
                variant="light"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactDetail;
