import utensils from "../../assets/images/utensils.svg";
import { Image } from "react-bootstrap";
import "./Separator.css";

const Separator = () => {
  return (
    <div className="separator text-center">
      <span className="line"></span>
      <Image className="img" src={utensils} />
      <span className="line"></span>
    </div>
  );
};

export default Separator;
