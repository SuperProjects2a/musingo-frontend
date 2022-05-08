import { Card, Row, Col, Button } from "react-bootstrap";

const ratings = [
  {
    date: "21.03.2010",
    user: "Patryk Graca",
    title: "Gitara elektryczna",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    date: "21.03.2010",
    user: "Anna Nowak",
    title: "Kurs gry na pianinie",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    date: "21.03.2010",
    user: "Jan Kowalski",
    title: "Perkusja",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const AcuiredRatings = () => {
  return (
    <div className="userProfileDiv p-4">
      <Card>
        <Card.Body className="px-5">
          <Card.Title>Otrzymane oceny</Card.Title>
          <div className="d-sm-block pb-4">
            {ratings.map((rating, index) => (
              <Row className="pb-4">
                <Col key={index}>
                  <h6>{rating.user}</h6>
                  <h6>
                    <b>{rating.title}</b>
                  </h6>
                  {rating.text}
                </Col>
              </Row>
            ))}
          </div>
          <hr />
          <div style={{ textAlign: "center" }}>
            <Button variant="Link" size="lg">
              Zobacz więcej
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AcuiredRatings;
