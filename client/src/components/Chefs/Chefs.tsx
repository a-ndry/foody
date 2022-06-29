import { Container, Card, Row, Col } from "react-bootstrap";
import Separator from "../Separator/Separator";
import SectionHeading from "../Typography/SectionHeading";
import john from "../../assets/images/team-1.jpg";
import mike from "../../assets/images/team-2.jpg";
import sarah from "../../assets/images/team-3.jpg";
import jack from "../../assets/images/team-4.jpg";
import Icon from "../Icon/Icon";
import "./Chefs.css";

interface IChef {
  name: string;
  role: "senior chef" | "chef";
  image: string;
  networks: { platform: string; url: string }[];
}

const chefs: IChef[] = [
  {
    name: "John Doe",
    role: "senior chef",
    image: john,
    networks: [
      {
        platform: "facebook",
        url: "https://facebook.com",
      },
      {
        platform: "twitter",
        url: "https://twitter.com",
      },
      {
        platform: "instagram",
        url: "https://instagram.com",
      },
    ],
  },
  {
    name: "Mike Doe",
    role: "senior chef",
    image: mike,
    networks: [
      {
        platform: "facebook",
        url: "https://facebook.com",
      },
      {
        platform: "twitter",
        url: "https://twitter.com",
      },
      {
        platform: "instagram",
        url: "https://instagram.com",
      },
    ],
  },
  {
    name: "Sarah Doe",
    role: "senior chef",
    image: sarah,
    networks: [
      {
        platform: "facebook",
        url: "https://facebook.com",
      },
      {
        platform: "twitter",
        url: "https://twitter.com",
      },
      {
        platform: "instagram",
        url: "https://instagram.com",
      },
    ],
  },
  {
    name: "Jack Doe",
    role: "senior chef",
    image: jack,
    networks: [
      {
        platform: "facebook",
        url: "https://facebook.com",
      },
      {
        platform: "twitter",
        url: "https://twitter.com",
      },
      {
        platform: "instagram",
        url: "https://instagram.com",
      },
    ],
  },
];

const Chefs = () => {
  return (
    <div id="team" className="py-5 text-center">
      <Container className="pt-5 pb-4 px-lg-5 px-xl-0">
        <SectionHeading>Our Chef Masters</SectionHeading>
        <Separator />
        <Row xs={1} md={2} xl={4} className="mt-5 mb-3">
          {chefs.map((chef) => (
            <Col className="mb-2" key={chef.name}>
              {makeChefCard(chef)}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const makeChefCard = (chef: IChef) => {
  return (
    <Card className="chef-card border-0">
      <Card.Img src={chef.image} />
      <Card.ImgOverlay
        className="bg-white rounded-0 py-4"
        style={{ top: "auto" }}
      >
        <Card.Title className="text-secondary fs-3 fw-normal">
          {chef.name}
        </Card.Title>
        <Card.Text
          className="text-uppercase fw-semibold"
          style={{
            color: "#d62828",
            letterSpacing: "2px",
          }}
        >
          {chef.role}
        </Card.Text>

        <div className="chef-networks">
          {chef.networks.map((net) => (
            <Icon
              key={net.platform}
              href={net.url}
              name={net.platform}
              variant="dark"
            />
          ))}
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Chefs;
