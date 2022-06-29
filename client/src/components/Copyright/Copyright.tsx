import { Container } from "react-bootstrap";

const Copyright = () => {
  return (
    <Container>
      <p className="text-center py-4 my-2">
        Copyright &copy; Foody Restaurant Website {new Date().getFullYear()}
      </p>
    </Container>
  );
};

export default Copyright;
