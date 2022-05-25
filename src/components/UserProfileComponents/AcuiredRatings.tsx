import { Card, Row, Col, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import ProgressBar from "./ProgressBar";
import React, { useState } from "react";

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
  {
    ratingValue: 4,
    date: "21.03.2010",
    user: "Jan Kowalski",
    title: "Perkusja",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    ratingValue: 5,
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

const sumOfRatings = fiveNow + fourNow + threeNow + twoNow + oneNow;

const AcuiredRatings = () => {
  var itemsList = 2;
  const [showMore, setShowMore] = useState(false);

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
              <p>{sumOfRatings} Ocen</p>
            </div>
            <div style={{ width: "270px", float: "left" }}>
              <Row>
                <Col xs={4}>
                  <Rating ratingValue={100} readonly size={20} />
                </Col>
                <Col className="mt-3" xs={{ span: 5, offset: 1 }}>
                  <ProgressBar completed={fiveNow} />
                </Col>
                <Col className="ratingValue mt-2" xs={{ span: 2, offset: -1 }}>
                  {fiveNow}
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Rating ratingValue={80} readonly size={20} />
                </Col>
                <Col className="mt-3" xs={{ span: 5, offset: 1 }}>
                  <ProgressBar completed={fourNow} />
                </Col>
                <Col className="ratingValue mt-2" xs={{ span: 2, offset: -1 }}>
                  {fourNow}
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Rating ratingValue={60} readonly size={20} />
                </Col>
                <Col className="mt-3" xs={{ span: 5, offset: 1 }}>
                  <ProgressBar completed={threeNow} />
                </Col>
                <Col className="ratingValue mt-2" xs={{ span: 2, offset: -1 }}>
                  {threeNow}
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Rating ratingValue={40} readonly size={20} />
                </Col>
                <Col className="mt-3" xs={{ span: 5, offset: 1 }}>
                  <ProgressBar completed={twoNow} />
                </Col>
                <Col className="ratingValue mt-2" xs={{ span: 2, offset: -1 }}>
                  {twoNow}
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Rating ratingValue={20} readonly size={20} />
                </Col>
                <Col className="mt-3" xs={{ span: 5, offset: 1 }}>
                  <ProgressBar completed={oneNow} />
                </Col>
                <Col className="ratingValue mt-2" xs={{ span: 2, offset: -1 }}>
                  {oneNow}
                </Col>
              </Row>
            </div>
          </Row>
          {!showMore ? (
            <div className="d-sm-block pb-4 mt-5">
              {ratings.slice(0, 3).map((rating, index) => (
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
          ) : (
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
          )}

          <hr />
          <div style={{ textAlign: "center" }}>
            <Button
              variant="Link"
              size="lg"
              onClick={() => setShowMore(!showMore)}
            >
              {!showMore ? "Zobacz więcej" : "Ukryj"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AcuiredRatings;
