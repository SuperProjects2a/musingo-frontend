import { Card, Row, Col, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import ProgressBar from "./ProgressBar";

const ratings = [
  {
    ratingValue: 1,
    date: "21.03.2010",
    user: "Patryk Graca",
    title: "Gitara elektryczna",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    ratingValue: 2,
    date: "21.03.2010",
    user: "Anna Nowak",
    title: "Kurs gry na pianinie",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    ratingValue: 3,
    date: "21.03.2010",
    user: "Jan Kowalski",
    title: "Perkusja",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const fiveNow = 90;
const fourNow = 30;
const threeNow = 20;
const twoNow = 5;
const oneNow = 1;

const AcuiredRatings = () => {
  return (
    <div className="userProfileDiv p-4 px-5">
      <Card style={{ borderRadius: "20px" }}>
        <Card.Body className="px-5">
          <Card.Title>Otrzymane oceny</Card.Title>
          <Row>
            <div style={{ width: "100px", float: "left" }}>
              <p>
                {" "}
                <span style={{ fontSize: "30px" }}>3,5 </span>
                <span style={{ fontSize: "20px", color: "grey" }}>/ 5</span>
              </p>{" "}
              <p>30 ocen</p>
            </div>
            <div style={{ width: "200px", float: "left" }}>
              <Row>
                <Rating
                  ratingValue={100}
                  readonly
                  size={20}
                  style={{ float: "left" }}
                />
                <ProgressBar completed={fiveNow} />
              </Row>
              <Row>
                <Rating ratingValue={80} readonly size={20} />
                <ProgressBar completed={fourNow} />
              </Row>
              <Row>
                <Rating ratingValue={60} readonly size={20} />
                <ProgressBar completed={threeNow} />
              </Row>
              <Row>
                <Rating ratingValue={40} readonly size={20} />
                <ProgressBar completed={twoNow} />
              </Row>
              <Row>
                <Rating ratingValue={20} readonly size={20} />
                <ProgressBar completed={oneNow} />
              </Row>
            </div>
          </Row>
          <div className="d-sm-block pb-4 mt-5">
            {ratings.map((rating, index) => (
              <Row className="pb-4">
                <Col key={index}>
                  <h6>
                    <Rating
                      ratingValue={rating.ratingValue * 20}
                      readonly
                      size={20}
                    />{" "}
                    <span style={{ color: "grey" }}>{rating.date}</span>
                  </h6>
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
