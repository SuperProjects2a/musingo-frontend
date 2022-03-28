import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// const AnnouncementCard = (linkA: any, title: any, price: any, city: any) => {
const AnnouncementCard = (
  linkA: string,
  title: string,
  price: number,
  city: string
) => {
  // const AnnouncementCard = (props) => {
  return (
    <>
      <Link to={linkA} className="categories px-sm-2">
        <Card>
          <Card.Img
            variant="top"
            // src={category.imgLink}
            src={"https://picsum.photos/200/300?random=2"}
            style={{ height: "22vh", width: "100%", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title style={{ height: "10vh" }}>
              {/* <Card.Title> */}
              {/* {category.text} bowihihc                   */}
              {/* k[pqkdowjopj wpjmp wojfpowj wkwojfpo powj pwjjwpoj */}
              {/* if({category.text}.length > 10) {{category.text}.substring(0, 10)} */}
              {/* {announcement.title.length > 26 ? (
                      <p>{announcement.title.substring(0, 23)}...</p>
                    ) : ( */}
              {title.length > 20 ? (
                <p>{title.substring(0, 17)}...</p>
              ) : (
                <p>{title}</p>
              )}
            </Card.Title>
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
