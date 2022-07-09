import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Header.css";

export interface HeaderContent {
  src: string;
  title: string;
  subtitle: string;
  clickToAction: {
    to: string;
    text: string;
  };
}
const headers: HeaderContent[] = [
  {
    src: "/images/banner-bg-1.jpg",
    title: "Chase The Flavors",
    subtitle: "FOOD IS THE INGREDIENT THAT BINDS US TOGETHER.",
    clickToAction: {
      to: "/",
      text: "Taste now",
    },
  },
  {
    src: "/images/banner-bg-2.jpg",
    title: "Pizza and divine taste",
    subtitle: "YOU CAN'T MAKE EVERYONE HAPPY. YOU ARE NOT PIZZA.",
    clickToAction: {
      to: "/",
      text: "order now",
    },
  },
  {
    src: "/images/banner-bg-3.jpg",
    title: "Paradise on your plate",
    subtitle: " PEOPLE WHO LOVE TO EAT ARE ALWAYS THE BEST PEOPLE.",
    clickToAction: {
      to: "/",
      text: "learn more",
    },
  },
];

let currentHeaderContentIdx = 0;
function getNextHeaderContent() {
  return headers[currentHeaderContentIdx % headers.length];
}

const Header = () => {
  const [headerContent, setHeaderContent] = useState<HeaderContent>(
    headers[currentHeaderContentIdx]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderContent(getNextHeaderContent());
      currentHeaderContentIdx += 1;
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="header"
      style={{ backgroundImage: `url(${headerContent.src})` }}
      className="header text-white text-center d-flex flex-column align-items-center justify-content-center p-4"
    >
      <h1 className="fw-bold mb-4">{headerContent.title}</h1>
      <p className="text-uppercase mb-4">{headerContent.subtitle}</p>
      <Button
        href={headerContent.clickToAction.to}
        variant="outline-light"
        className="rounded-0 text-uppercase px-4 py-2 border-3"
      >
        {headerContent.clickToAction.text}
      </Button>
    </header>
  );
};

export default Header;
