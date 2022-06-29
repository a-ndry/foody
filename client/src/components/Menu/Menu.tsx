import { Container, Card, Row, Col } from "react-bootstrap";
import Separator from "../Separator/Separator";
import SectionHeading from "../Typography/SectionHeading";
import breakfast from "../../assets/images/food-breakfast.jpg";
import chicken from "../../assets/images/food-chicken.jpg";
import pizza from "../../assets/images/food-pizza.jpg";
import lunch from "../../assets/images/food-lunch.jpg";
import dinner from "../../assets/images/food-dinner.jpg";
import burger from "../../assets/images/food-burger.jpg";
import { FC } from "react";
import Button from "../Button/Button";

interface IMenu {
  title: string;
  description: string;
  src: string;
  price: number;
}

const menus: IMenu[] = [
  {
    title: "Breakfast",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: breakfast,
    price: 10,
  },
  {
    title: "chicken",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: chicken,
    price: 10,
  },
  {
    title: "lunch",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: lunch,
    price: 10,
  },
  {
    title: "pizza",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: pizza,
    price: 10,
  },
  {
    title: "dinner",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: dinner,
    price: 10,
  },
  {
    title: "burger",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: burger,
    price: 10,
  },
];

const Menu = () => {
  return (
    <div id="menu" className="py-5">
      <Container className="pt-5 pb-4 px-lg-5 px-xl-0">
        <SectionHeading>Food Menu</SectionHeading>
        <Separator />
        <Row xs={1} lg={2} className="mt-5 mb-3">
          {menus.map((menu) => (
            <Col className="mb-3" key={menu.title}>
              <MenuCard menuDetail={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

interface IMenuCard {
  menuDetail: IMenu;
}

const MenuCard: FC<IMenuCard> = ({ menuDetail }) => {
  return (
    <Card className="flex-row border-0 align-items-center gap-3">
      <Card.Img src={menuDetail.src} style={{ width: "50%" }} />
      <Card.Body>
        <Card.Title className="text-secondary d-flex justify-content-between gap-3">
          <span className="type text-capitalize">{menuDetail.title}</span>
          <span className="price">${menuDetail.price}</span>
        </Card.Title>
        <Card.Text>{menuDetail.description}</Card.Text>
        <Button variant="danger" className="rounded-0">
          Order now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Menu;
