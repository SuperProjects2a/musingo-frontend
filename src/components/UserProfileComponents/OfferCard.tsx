import "bootstrap/dist/css/bootstrap.min.css";
import { Card, OverlayTrigger, Tooltip, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FC } from "react";

interface IOffer {
  linkA: string;
  title: string;
  price: number;
  city: string;
}

const OfferCard: FC<IOffer> = ({ linkA, title, price, city }) => {
  return (
    <>
      <Card>
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
        <Card.Body>
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
          <div className="d-grid gap-2">
            <Button className="block py-1" variant="dark">
              Edytuj
            </Button>
            <Button className="block py-1" variant="dark">
              Promuj
            </Button>
            <Button className="block py-1" variant="dark">
              Zmień status
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default OfferCard;
