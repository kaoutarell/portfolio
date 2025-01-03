import { Col } from "react-bootstrap";

export const Certification = ({ imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div>
        <img src={imgUrl} className="certification-img" />
      </div>
    </Col>
  );
};
