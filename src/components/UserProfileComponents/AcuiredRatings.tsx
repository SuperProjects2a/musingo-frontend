import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import ProgressBar from "./ProgressBar";
import React, { useEffect, useState } from "react";
import { getProfileRatings, IRating } from "../../services/profileService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";

const AcuiredRatings = () => {
  const [showMore, setShowMore] = useState(false);
  const [ratings, setRatings] = useState<IRating[]>([] as IRating[]);
  const [oneStar, setOneStar] = useState(0);
  const [twoStar, setTwoStar] = useState(0);
  const [threeStar, setThreeStar] = useState(0);
  const [fourStar, setFourStar] = useState(0);
  const [fiveStar, setFiveStar] = useState(0);
  const [sumOfRatings, setSumOfRatings] = useState(0);
  const [avg, setAvg] = useState(0);

  const calculateRatings = () => {
    setOneStar(ratings.filter((x) => x.rating == 1).length);
    setTwoStar(ratings.filter((x) => x.rating == 2).length);
    setThreeStar(ratings.filter((x) => x.rating == 3).length);
    setFourStar(ratings.filter((x) => x.rating == 4).length);
    setFiveStar(ratings.filter((x) => x.rating == 5).length);
  };

  useEffect(() => {
    const getM = async () => {
      const m = await getProfileRatings();
      setRatings(m);
    };
    getM();
  }, []);
  useEffect(() => {
    calculateRatings();
  }, [ratings]);

  useEffect(() => {
    setSumOfRatings(oneStar + twoStar + threeStar + fourStar + fiveStar);
  }, [oneStar, twoStar, threeStar, fourStar, fiveStar]);

  useEffect(() => {
    setAvg(
      (oneStar + twoStar * 2 + threeStar * 3 + fourStar * 4 + fiveStar * 5) /
        sumOfRatings
    );
  }, [sumOfRatings]);

  return (
    <>
      { ratings.length > 0 ? (   
      <div className="userProfileDiv py-4 px-3 px-md-5">
        <Card style={{ borderRadius: "20px" }}>
          <Card.Body className="px-3 px-md-5">
            <Card.Title>Otrzymane oceny</Card.Title>
            <Row>
              <div style={{ width: "100px", float: "left" }}>
                <p>
                  {" "}
                  <span style={{ fontSize: "30px" }}>{avg} </span>
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
                    <ProgressBar completed={(fiveStar / sumOfRatings) * 100} />
                  </Col>
                  <Col
                    className="ratingValue mt-2"
                    xs={{ span: 2, offset: -1 }}
                  >
                    {fiveStar}
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <Rating ratingValue={80} readonly size={20} />
                  </Col>
                  <Col className="mt-3" xs={{ span: 5, offset: 1 }}>
                    <ProgressBar completed={(fourStar / sumOfRatings) * 100} />
                  </Col>
                  <Col
                    className="ratingValue mt-2"
                    xs={{ span: 2, offset: -1 }}
                  >
                    {fourStar}
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <Rating ratingValue={60} readonly size={20} />
                  </Col>
                  <Col className="mt-3" xs={{ span: 5, offset: 1 }}>
                    <ProgressBar completed={(threeStar / sumOfRatings) * 100} />
                  </Col>
                  <Col
                    className="ratingValue mt-2"
                    xs={{ span: 2, offset: -1 }}
                  >
                    {threeStar}
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <Rating ratingValue={40} readonly size={20} />
                  </Col>
                  <Col className="mt-3" xs={{ span: 5, offset: 1 }}>
                    <ProgressBar completed={(twoStar / sumOfRatings) * 100} />
                  </Col>
                  <Col
                    className="ratingValue mt-2"
                    xs={{ span: 2, offset: -1 }}
                  >
                    {twoStar}
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <Rating ratingValue={20} readonly size={20} />
                  </Col>
                  <Col className="mt-3" xs={{ span: 5, offset: 1 }}>
                    <ProgressBar completed={(oneStar / sumOfRatings) * 100} />
                  </Col>
                  <Col
                    className="ratingValue mt-2"
                    xs={{ span: 2, offset: -1 }}
                  >
                    {oneStar}
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
                          ratingValue={rating.rating * 20}
                          readonly
                          size={20}
                        />{" "}
                      </h6>
                      <h6>{`${rating.user.name} ${rating.user.surname}`}</h6>
                      <h6>
                        <b>{rating.transaction.offer.title}</b>
                      </h6>
                      {rating.commentText}
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
                          ratingValue={rating.rating * 20}
                          readonly
                          size={20}
                        />{" "}
                        <span style={{ color: "grey" }}>
                          {rating?.transaction?.lastUpdateTime?.substring(
                            0,
                            10
                          )}
                        </span>
                      </h6>
                      <h6>{`${rating.user.name} ${rating.user.surname}`}</h6>
                      <h6>
                        <b>{rating.transaction.offer.title}</b>
                      </h6>
                      {rating.commentText}
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
      ) : (<Container className="py-4 d-flex justify-content-center">
      <div className="py-5 m-sm-4" style={{ textAlign: "center" }}>
        <FontAwesomeIcon
          icon={faFaceFrownOpen}
          style={{ height: "100px" }}
          className="py-3"
        />
        <h5 >Nikt nie wystawił Ci jeszcze opini.</h5>
      </div>
    </Container>)
}
    </>
  );
};

export default AcuiredRatings;
