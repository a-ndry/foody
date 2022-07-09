import { FC, useEffect, useRef } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import Separator from "../Separator/Separator";
import SectionHeading from "../Typography/SectionHeading";

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
    src: "/images/food-breakfast.jpg",
    price: 10,
  },
  {
    title: "chicken",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: "/images/food-chicken.jpg",
    price: 10,
  },
  {
    title: "lunch",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: "/images/food-lunch.jpg",
    price: 10,
  },
  {
    title: "pizza",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: "/images/food-pizza.jpg",
    price: 10,
  },
  {
    title: "dinner",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: "/images/food-dinner.jpg",
    price: 10,
  },
  {
    title: "burger",
    description: "Lorem ipsum dolor sit amet consectetur.",
    src: "/images/food-burger.jpg",
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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgSrc = cardRef.current?.querySelector<HTMLElement>(".img-src");
    const imgElt = cardRef.current?.querySelector<HTMLImageElement>(".img-elt");
    if (!imgSrc || !imgElt) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.setAttribute("src", imgSrc.textContent || "");
          observer.unobserve(entries[0].target);
        }
      },
      {
        rootMargin: "-100px",
      }
    );
    observer.observe(imgElt);
  }, []);

  return (
    <Card ref={cardRef} className="flex-row border-0 align-items-center">
      <span className="img-src d-none">{menuDetail.src}</span>
      <Card.Img alt={menuDetail.title} className="img-elt pe-3 w-50" />
      <Card.Body className="w-50">
        <Card.Title className="text-secondary d-flex justify-content-between  flex-wrap">
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
