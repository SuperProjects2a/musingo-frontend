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
    return <h2>Loading...</h2>;
  }

  return (
    <div>
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
    </div>
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
