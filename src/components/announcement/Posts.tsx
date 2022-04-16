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
        <Col xs={6} sm={4} md={3} lg={3} xl={2} className="p-1">
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
