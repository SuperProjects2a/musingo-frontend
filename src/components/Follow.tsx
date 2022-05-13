import React, { useState, useEffect } from "react";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import Posts from "./announcement/Posts";
import PaginationSearch from "./announcement/PaginationSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleXmark } from "@fortawesome/free-solid-svg-icons";
import data from "../data.json";

interface IAnnouncement {
  link: string;
  title: string;
  price: number;
  city: string;
  watch: boolean;
}

const Follow = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>(
    [] as IAnnouncement[]
  );
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    // const fetchPosts = async () => {
    //   setLoading(true);
    //   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //   setPosts(res.data);
    //   setLoading(false);
    // };
    const fetchAnnouncements = async () => {
      setLoading(true);
      setAnnouncements(data);
      setLoading(false);
    };

    fetchAnnouncements();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentAnnouncements = announcements.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <Container fluid style={{ textAlign: "left" }}>
      {loading == true ? (
        <Col
          xs={{ offset: 5 }}
          lg={{ offset: 6 }}
          className="px-sm-5 px-lg-0 py-5 mb-5"
        >
          <Spinner
            animation="border"
            style={{ height: "50px", width: "50px" }}
          />
        </Col>
      ) : (
        <div className="px-2 px-sm-3 px-md-4 pb-3">
          <div>
            {announcements.length > 0 ? (
              <>
                <h5 style={{ textAlign: "left" }} className="px-1">
                  <b>Obserwowane ogłoszenia</b>
                </h5>
                <div>
                  <Row className="d-flex justify-content-center">
                    <Posts
                      announcements={currentAnnouncements}
                      loading={loading}
                    />
                  </Row>
                  <Row className="py-2">
                    <PaginationSearch
                      postsPerPage={postsPerPage}
                      totalPosts={announcements.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    ></PaginationSearch>
                  </Row>
                </div>
              </>
            ) : (
              <Container className="py-4">
                <div className="py-5 m-sm-4" style={{ textAlign: "center" }}>
                  <FontAwesomeIcon
                    icon={faHeartCircleXmark}
                    style={{ height: "100px" }}
                    className="py-3"
                  />
                  <h5>Nie masz obserwowanych przedmiotów.</h5>
                </div>
              </Container>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Follow;
