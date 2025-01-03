import { Col } from "react-bootstrap";

export const Technology = ({ imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} className="d-flex justify-content-center mb-3">
      <div>
        <img src={imgUrl} className="technology-img" />
      </div>
    </Col>
  );
};
