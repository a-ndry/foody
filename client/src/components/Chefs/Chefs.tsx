import { Container, Card, Row, Col } from "react-bootstrap";
import Separator from "../Separator/Separator";
import SectionHeading from "../Typography/SectionHeading";
import Icon from "../Icon/Icon";
import "./Chefs.css";
import { FC } from "react";
import ImageLazy from "../ImageLazy/ImageLazy";

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
    image: "/images/team-1.jpg",
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
    image: "/images/team-2.jpg",
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
    image: "/images/team-3.jpg",
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
    image: "/images/team-4.jpg",
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
    <div id="team" className="bg-light py-5 text-center">
      <Container className="pt-5 pb-4 px-lg-5 px-xl-0">
        <SectionHeading>Our Chef Masters</SectionHeading>
        <Separator />
        <Row xs={1} md={2} xl={4} className="mt-5 mb-3">
          {chefs.map((chef) => (
            <Col className="mb-2" key={chef.name}>
              <ChefCard chef={chef} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

interface IChefCard {
  chef: IChef;
}
const ChefCard: FC<IChefCard> = ({ chef }) => {
  return (
    <Card className="chef-card border-0">
      <ImageLazy src={chef.image} alt={chef.name} />
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
