import "bootstrap/dist/css/bootstrap.min.css";
import { Card, OverlayTrigger, Tooltip, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";


const OfferCard = (params:any) => {
  return (
    <>
      <Card>
        <Link to={`/DisplayOffer/${params.offer?.id}`} className="cardTitle">
          <Card.Img
            variant="top"
            src={params.offer.imageUrl}
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
          <Link to={`/DisplayOffer/${params.offer?.id}`} className="cardTitle">
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="tooltip-disabled">{params.offer?.title}</Tooltip>}
            >
              <div
                style={{
                  height: "60px",
                  fontSize: "19px",
                  fontWeight: "500",
                  lineHeight: "21px",
                }}
              >
                {params.offer?.title.length > 20 ? (
                  /\s+$/.test(params.offer?.title.substring(0, 17)) == true ||
                  /[-_(),.]$/.test(params.offer?.title.substring(0, 17)) == true ? (
                    <p>{params.offer?.title.substring(0, 16)}...</p>
                  ) : (
                    <p>{params.offer?.title.substring(0, 17)}...</p>
                  )
                ) : (
                  <p>{params.offer?.title}</p>
                )}
              </div>
            </OverlayTrigger>
          </Link>
          <div className="pt-1">
            <div>
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{
                  height: "20px",
                  paddingRight: "7.5px",
                  paddingLeft: "1.5px",
                }}
              />
              {params.offer?.createTime.substring(0, 10)}
            </div>
          </div>
          <div>
            <Col xs={12}>
              <Link to={`/EditOffer/${params.offer?.id}`}>
                <Button
                  className="my-1"
                  variant="dark"
                  style={{ width: "100%" }}
                >
                  Edytuj
                </Button>
              </Link>
            </Col>
            {params.offer?.isPromoted == true ? (
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
            <Button variant="danger" style={{width: "100%" }}>
              Usuń
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default OfferCard;
