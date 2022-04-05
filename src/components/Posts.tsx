import { pseudoRandomBytes } from "crypto";
import React from "react";
import { FC } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  InputGroup,
  Image,
  Card,
  Pagination,
  Spinner,
} from "react-bootstrap";
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

// interface Post {
//   posts: Array<posts>;
//   loading: boolean;
// }

// interface posts {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// const Posts: FC<Post> = ({ posts, loading }) => {
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <ul className="list-group mb-4">
//       {posts.map((post) => (
//         <li key={post.id} className="list-group-item">
//           {post.id} {post.title}
//         </li>
//       ))}
//     </ul>
//   );
// };

export default Posts;
