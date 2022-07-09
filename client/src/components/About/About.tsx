import { Container, Row, Col, Image } from "react-bootstrap";
import Separator from "../Separator/Separator";
import SectionHeading from "../Typography/SectionHeading";

const About = () => {
  return (
    <div id="about" className="py-5 bg-white">
      <Container className="pt-5 pb-4">
        <Row>
          <Col xl={3} className="d-none d-xl-block">
            <Image fluid src="/images/about-img-1.jpg" alt="Images about." />
          </Col>
          <Col xl={6}>
            <SectionHeading>About Foody Restaurant</SectionHeading>
            <Separator />
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              iusto aut molestias excepturi, nam est optio id rerum aliquam,
              deserunt cum incidunt eum quos corporis error magni et
              necessitatibus enim?
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              consectetur dolore minus cupiditate quibusdam cumque libero iusto
              dolorum, facere, nostrum provident repellendus quos? Nisi, veniam
              rem molestias maiores saepe unde, error dignissimos ipsam
              laboriosam cupiditate fugit recusandae? Delectus veniam ducimus
              assumenda consequatur? Nostrum numquam error architecto esse quos
              assumenda asperiores.
            </p>
          </Col>
          <Col xl={3} className="d-none d-xl-block">
            <Image fluid src="/images/about-img-2.jpg" alt="Images about." />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
