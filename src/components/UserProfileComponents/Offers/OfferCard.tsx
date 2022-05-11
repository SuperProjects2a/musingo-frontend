import "bootstrap/dist/css/bootstrap.min.css";
import { Card, OverlayTrigger, Tooltip, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

interface IOffer {
  link: string;
  title: string;
  date: string;
  promote: boolean;
}

const OfferCard: FC<IOffer> = ({ link, title, date, promote }) => {
  return (
    <>
      <Card>
        <Link to={link} className="cardTitle">
          <Card.Img
            variant="top"
            src={`https://picsum.photos/200/300?random=${Math.random() * 100}`}
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
        <Card.Body className="p-2">
          <Link to={link} className="cardTitle">
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="tooltip-disabled">{title}</Tooltip>}
            >
              <div
                style={{
                  height: "60px",
                  fontSize: "19px",
                  fontWeight: "500",
                  lineHeight: "21px",
                }}
              >
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
              </div>
            </OverlayTrigger>
          </Link>
          <div className="pt-1">
            {/* <div className="pb-1">
              <FontAwesomeIcon
                icon={faEye}
                style={{ height: "19px", paddingRight: "5px" }}
              />
              {followers}
            </div> */}
            <div>
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{
                  height: "20px",
                  paddingRight: "7.5px",
                  paddingLeft: "1.5px",
                }}
              />
              {date}
            </div>
          </div>
          <div>
            <Col xs={12}>
              <Link to="/EditOffer">
                <Button
                  className="my-1"
                  variant="dark"
                  style={{ width: "100%" }}
                >
                  Edytuj
                </Button>
              </Link>
            </Col>
            {promote == true ? (
              <Button className="mb-1" variant="dark" style={{ width: "100%" }}>
                Promuj
              </Button>
            ) : (
              <Button
                className="mb-1"
                variant="dark"
                style={{ width: "100%" }}
                disabled
              >
                Wypromowane
              </Button>
            )}
            <Button className="" variant="dark" style={{ width: "100%" }}>
              Anuluj
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default OfferCard;
