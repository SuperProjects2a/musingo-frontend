// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FC } from "react";

interface Announcement {
  linkA: string;
  title: string;
  price: number;
  city: string;
}

const AnnouncementCard: FC<Announcement> = ({ linkA, title, price, city }) => {
  return (
    <>
      <Link to={linkA} className="categories">
        <Card>
          <Card.Img
            variant="top"
            src={`https://picsum.photos/200/300?random=${Math.random() * 100}`}
            style={{
              height: " calc(11vh + 4vw)",
              minHeight: "150px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            className="pt-2 px-2 announcementImg"
          />
          <Card.Body>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="tooltip-disabled">{title}</Tooltip>}
            >
              <Card.Title style={{ height: "60px" }}>
                {title.length > 20 ? (
                  <p>{title.substring(0, 17)}...</p>
                ) : (
                  <p>{title}</p>
                )}
              </Card.Title>
            </OverlayTrigger>
            <Card.Text className="pt-1">
              <b>{price} zł</b>
              <Card.Subtitle className="py-1">
                <small className="text-muted">{city}</small>
              </Card.Subtitle>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default AnnouncementCard;
