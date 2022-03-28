// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FC } from "react";
interface Announcement {
  linkA: string;
  title: string;
  price: number;
  city: string;
}

// class announcement {
// linkA: string;
// title: string;
// price: number;
// city: string;
//   constructor(linkA: string, title: string, price: number, city: string) {
//     this.linkA = linkA;
//     this.title = title;
//     this.price = price;
//     this.city = city;
//   }
// }
// const AnnouncementCard = (linkA: any, title: any, price: any, city: any) => {
const AnnouncementCard: FC<Announcement> = ({ linkA, title, price, city }) => {
  // const AnnouncementCard = (props:announcements) => {
  return (
    <>
      <Link to={linkA} className="categories">
        <Card>
          <Card.Img
            variant="top"
            // src={category.imgLink}
            // src={"https://picsum.photos/200/300?random=2"}
            src={`https://picsum.photos/200/300?random=${Math.random() * 100}`}
            style={{
              // height: "22vh",
              height: " calc(10vh + 12vw)",
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            className="pt-2 px-2"
          />
          <Card.Body>
            {/* <Card.Title style={{ height: "10vh" }}> */}
            <Card.Title style={{ height: "calc(7vh + 3vw)" }}>
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
