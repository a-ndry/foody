import "./Logo.css";
import { Image } from "react-bootstrap";
import logo from "../../assets/images/logo-png.png";

const Logo = () => {
  return (
    <div className="logo d-inline-flex align-items-center gap-2">
      <Image src={logo} />
      <span className="h2 m-0 text-orange">Foody</span>
    </div>
  );
};

export default Logo;
