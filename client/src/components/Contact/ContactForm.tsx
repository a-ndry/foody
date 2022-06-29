import { Container, Form } from "react-bootstrap";
import Button from "../Button/Button";
import Separator from "../Separator/Separator";
import SectionHeading from "../Typography/SectionHeading";

const ContactForm = () => {
  return (
    <div className="py-5">
      <Container className="pt-5 pb-4">
        <SectionHeading>Keep In Touch</SectionHeading>
        <Separator />
        <Form className="contact-form mt-5">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              className="border-2 px-3 py-2"
              placeholder="Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              className="border-2 px-3 py-2"
              placeholder="Full Email"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              as="textarea"
              className="border-2 px-3 py-2"
              rows={5}
              placeholder="Message"
            />
          </Form.Group>

          <Button
            size="lg"
            variant="dark"
            type="submit"
            className="d-block w-100 text-uppercase rounded-0"
          >
            Send message
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
