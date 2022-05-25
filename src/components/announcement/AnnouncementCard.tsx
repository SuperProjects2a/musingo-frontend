import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

interface IAnnouncement {
  linkA: string;
  title: string;
  price: number;
  city: string;
  watch: boolean;
  imgUrls: string[];
}

const AnnouncementCard: FC<IAnnouncement> = ({
  linkA,
  title,
  price,
  city,
  watch,
  imgUrls
}) => {
  return (
    <>
      <Card>
        <Link to={linkA} className="categories">
          <Card.Img
            variant="top"
            src={imgUrls[0]}
            style={{
              height: " calc(11vh + 4vw)",
              minHeight: "150px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "12px 12px 0 0",
            }}
            className="pt-2 px-2"
          />
        </Link>
        <Link to={linkA} className="categories">
          <Card.Body className="p-2 pb-0">
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="tooltip-disabled">{title}</Tooltip>}
            >
              <Card.Title style={{ height: "60px" }}>
                {title.length > 20 ? (
                  /\s+$/.test(title.substring(0, 17)) == true ||
                  /[-_(),.]$/.test(title.substring(0, 17)) == true ? (
                    <p>{title.substring(0, 16)}...</p>
                  ) : (
                    <p>{title.substring(0, 17)}...</p>
                  )
                ) : (
                  <p>{title}</p>
                )}
              </Card.Title>
            </OverlayTrigger>
          </Card.Body>
        </Link>
        <Card.Body className="px-2 pt-0 pb-2">
          <Row className="pt-1">
            <Col xs={9}>
              <Link to={linkA} className="categories">
                <Card.Text>
                  <b>{price} zł</b>
                  <Card.Subtitle className="pb-1 pt-1">
                    <small className="text-muted">{city}</small>
                  </Card.Subtitle>
                </Card.Text>
              </Link>
            </Col>
            <Col
              xs={3}
              className="pt-1 d-flex justify-content-end"
              style={{ textAlign: "right" }}
            >
              {watch == true ? (
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      Usuń z obserwowanych
                    </Tooltip>
                  }
                >
                  <Button variant="light" className="heartButton" type="submit">
                    <FontAwesomeIcon
                      icon={faHeartSolid}
                      style={{ height: "28px" }}
                    />
                  </Button>
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip id="tooltip-disabled">Obserwuj</Tooltip>}
                >
                  <Button
                    variant="light"
                    className="heartButton"
                    type="submit"
                    onClick={() => console.log("klik reg")}
                  >
                    <FontAwesomeIcon
                      icon={faHeartRegular}
                      style={{ height: "28px" }}
                    />
                  </Button>
                </OverlayTrigger>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default AnnouncementCard;
