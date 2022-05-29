import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnnouncementCard from "./AnnouncementCard";
import Posts from "./Posts";
import { IAnnouncement } from "../../services/offerService";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface IAnnouncements {
  announcements: IAnnouncement[];
  loading: boolean;
  center: boolean;
}

const AnnouncementsCarousel: FC<IAnnouncements> = ({
  announcements,
  loading,
  center,
}) => {
  return (
    <>
      {announcements.length > 6 ? (
        <Row className=" py-1 px-4 px-sm-4" fluid>
          <Slider {...settings}>
            {announcements.map((announcement, index) => (
              <Col className="px-1 px-sm-1">
                <AnnouncementCard
                  linkA={"/DisplayOffer/" + announcement.id}
                  title={announcement.title}
                  price={announcement.cost}
                  city={announcement.city}
                  watch={announcement.isWatched}
                  imgUrls={announcement.imageUrls}
                />
              </Col>
            ))}
          </Slider>
        </Row>
      ) : (
        <>
          <>
            {center ? (
              <>
                {announcements.length >= 2 ? (
                  announcements.length >= 3 ? (
                    announcements.length >= 4 ? (
                      announcements.length >= 5 ? (
                        announcements.length === 6 ? (
                          <>
                            {/* 6 */}
                            <Row
                              className="py-1 px-4 px-sm-4 d-block d-xl-none"
                              fluid
                            >
                              <Slider {...settings}>
                                {announcements.map((announcement, index) => (
                                  <Col className="px-1 px-sm-1">
                                    <AnnouncementCard
                                      linkA={"/DisplayOffer/" + announcement.id}
                                      title={announcement.title}
                                      price={announcement.cost}
                                      city={announcement.city}
                                      watch={announcement.isWatched}
                                      imgUrls={announcement.imageUrls}
                                    />
                                  </Col>
                                ))}
                              </Slider>
                            </Row>
                            <Row
                              className="d-flex justify-content-center d-none d-xl-block"
                              style={{ paddingLeft: "40px" }}
                            >
                              <Posts
                                announcements={announcements}
                                loading={loading}
                              />
                            </Row>
                          </>
                        ) : (
                          <>
                            {/* 5 */}
                            <Row
                              className="py-1 px-4 px-sm-4 d-block d-xl-none"
                              fluid
                            >
                              <Slider {...settings}>
                                {announcements.map((announcement, index) => (
                                  <Col className="px-1 px-sm-1">
                                    <AnnouncementCard
                                      linkA={"/DisplayOffer/" + announcement.id}
                                      title={announcement.title}
                                      price={announcement.cost}
                                      city={announcement.city}
                                      watch={announcement.isWatched}
                                      imgUrls={announcement.imageUrls}
                                    />
                                  </Col>
                                ))}
                              </Slider>
                            </Row>
                            <Row className="d-none d-xl-block">
                              <Row>
                                <Col xl={1}></Col>
                                {announcements.map((announcement, index) => (
                                  <Col lg={3} xl={2} className="p-1">
                                    <AnnouncementCard
                                      linkA={"/DisplayOffer/" + announcement.id}
                                      title={announcement.title}
                                      price={announcement.cost}
                                      city={announcement.city}
                                      watch={announcement.isWatched}
                                      imgUrls={announcement.imageUrls}
                                    />
                                  </Col>
                                ))}
                              </Row>
                            </Row>
                          </>
                        )
                      ) : (
                        <>
                          {/* 4 */}
                          <Row
                            className="py-1 px-4 px-sm-4 d-block d-lg-none"
                            fluid
                          >
                            <Slider {...settings}>
                              {announcements.map((announcement, index) => (
                                <Col className="px-1 px-sm-1">
                                  <AnnouncementCard
                                    linkA={"/DisplayOffer/" + announcement.id}
                                    title={announcement.title}
                                    price={announcement.cost}
                                    city={announcement.city}
                                    watch={announcement.isWatched}
                                    imgUrls={announcement.imageUrls}
                                  />
                                </Col>
                              ))}
                            </Slider>
                          </Row>
                          <Row className="d-none d-lg-block">
                            <Row className="mx-lg-1 mx-xl-0">
                              <Col xl={2}></Col>
                              {announcements.map((announcement, index) => (
                                <Col lg={3} xl={2} className="p-1">
                                  <AnnouncementCard
                                    linkA={"/DisplayOffer/" + announcement.id}
                                    title={announcement.title}
                                    price={announcement.cost}
                                    city={announcement.city}
                                    watch={announcement.isWatched}
                                    imgUrls={announcement.imageUrls}
                                  />
                                </Col>
                              ))}
                            </Row>
                          </Row>
                        </>
                      )
                    ) : (
                      <>
                        {/* 3 */}
                        <Row
                          className="py-1 px-4 px-sm-4 d-block d-sm-none"
                          fluid
                        >
                          <Slider {...settings}>
                            {announcements.map((announcement, index) => (
                              <Col className="px-1 px-sm-1">
                                <AnnouncementCard
                                  linkA={"/DisplayOffer/" + announcement.id}
                                  title={announcement.title}
                                  price={announcement.cost}
                                  city={announcement.city}
                                  watch={announcement.isWatched}
                                  imgUrls={announcement.imageUrls}
                                />
                              </Col>
                            ))}
                          </Slider>
                        </Row>
                        <Row className="d-flex justify-content-center d-none d-sm-block">
                          <Row className="mx-sm-1 mx-md-0">
                            <Col
                              md={1}
                              xl={3}
                              className="mx-md-3 mx-lg-4 mx-xl-1"
                            ></Col>
                            {announcements.map((announcement, index) => (
                              <Col sm={4} md={3} lg={3} xl={2} className="p-1">
                                <AnnouncementCard
                                  linkA={"/DisplayOffer/" + announcement.id}
                                  title={announcement.title}
                                  price={announcement.cost}
                                  city={announcement.city}
                                  watch={announcement.isWatched}
                                  imgUrls={announcement.imageUrls}
                                />
                              </Col>
                            ))}
                          </Row>
                        </Row>
                      </>
                    )
                  ) : (
                    <>
                      {/* 2 */}
                      <Row
                        className="py-1 px-4 px-sm-4 d-block d-sm-none"
                        fluid
                      >
                        <Slider {...settings}>
                          {announcements.map((announcement, index) => (
                            <Col className="px-1 px-sm-1">
                              <AnnouncementCard
                                linkA={"/DisplayOffer/" + announcement.id}
                                title={announcement.title}
                                price={announcement.cost}
                                city={announcement.city}
                                watch={announcement.isWatched}
                                imgUrls={announcement.imageUrls}
                              />
                            </Col>
                          ))}
                        </Slider>
                      </Row>
                      <Row className="d-flex justify-content-center d-none d-sm-block">
                        <Row>
                          <Col sm={2} md={3} xl={4} className="mx-1"></Col>
                          {announcements.map((announcement, index) => (
                            <Col sm={4} md={3} lg={3} xl={2} className="p-1">
                              <AnnouncementCard
                                linkA={"/DisplayOffer/" + announcement.id}
                                title={announcement.title}
                                price={announcement.cost}
                                city={announcement.city}
                                watch={announcement.isWatched}
                                imgUrls={announcement.imageUrls}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Row>
                    </>
                  )
                ) : (
                  <>
                    {/* 1 */}
                    <Row className="d-flex justify-content-center">
                      <Row>
                        <Col
                          xs={2}
                          sm={4}
                          md={4}
                          xl={5}
                          className="mx-md-3 mx-lg-4 mx-xl-0"
                        ></Col>
                        {announcements.map((announcement, index) => (
                          <Col
                            xs={8}
                            sm={4}
                            md={3}
                            lg={3}
                            xl={2}
                            className="p-1"
                          >
                            <AnnouncementCard
                              linkA={"/DisplayOffer/" + announcement.id}
                              title={announcement.title}
                              price={announcement.cost}
                              city={announcement.city}
                              watch={announcement.isWatched}
                              imgUrls={announcement.imageUrls}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Row>
                  </>
                )}
              </>
            ) : (
              <Row className="d-flex justify-content-center">
                <Posts announcements={announcements} loading={loading} />
              </Row>
            )}
          </>
        </>
      )}
    </>
  );
};

export default AnnouncementsCarousel;
