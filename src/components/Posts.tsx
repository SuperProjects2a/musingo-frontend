import { pseudoRandomBytes } from "crypto";
import React from "react";
import { FC } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import AnnouncementCard from "./AnnouncementCard";

interface IPost {
  announcements: IAnnouncement[];
  loading: boolean;
}

interface IAnnouncement {
  link: string;
  title: string;
  price: number;
  city: string;
}

const Posts: FC<IPost> = ({ announcements, loading }) => {
  if (loading) {
    return (
      <Col xs={{ offset: 5 }} lg={{ offset: 6 }} className="px-sm-5 px-lg-0">
        <Spinner animation="border" />
      </Col>
    );
  }

  return (
    <Row>
      {announcements.map((announcement, index) => (
        <Col
          xs={{ span: 6, offset: 0 }}
          sm={{ span: 4, offset: 0 }}
          md={3}
          lg={3}
          xl={2}
          className="p-1 p-xl-2"
        >
          <AnnouncementCard
            linkA={announcement.link}
            title={announcement.title}
            price={announcement.price}
            city={announcement.city}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
