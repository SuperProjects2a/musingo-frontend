import { FC } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import AnnouncementCard from "./AnnouncementCard";
import { IAnnouncement } from "../../services/offerService";

interface IPost {
  announcements: IAnnouncement[];
  loading: boolean;
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
            linkA={"/DisplayOffer/" + announcement.id}
            title={announcement.title}
            price={announcement.cost}
            city={announcement.city}
            watch={announcement.isWatched}
            imgUrls={announcement.imageUrls}
            id={announcement.id}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
