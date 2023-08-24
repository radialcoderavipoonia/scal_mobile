import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const ChooseUs = () => {
  return (
    <div className="choose_bg">
      <Container className=" my_container pb-5">
        <p className=" ff_rubik fw-medium text-center clr_white fs_4xl mb-0">
          Why Choose Us?
        </p>
        <p className=" clr_white ff_rubik fw-normal fs_md opacity_07 text-center">
          Here are a few good reasons that make SCal Mobile your no.1 choice:
        </p>
        <div className="position-relative road_line mt-5">
          {/* 1 */}
          <Row className="justify-content-md-between align-items-end align-items-sm-start flex-sm-row flex-column justify-content-end position-relative road_circle1 trlateY_-20">
            <Col
              md={5}
              sm={5}
              xs={10}
              className=" justify-content-sm-end justify-content-start"
            >
              <p className="text-sm-end lh_normal_sm opacity_03 ff_rubik fw-bolder fs_7xl mb-0 roadmap_text text-start">
                01
              </p>
            </Col>
            <Col
              md={5}
              sm={6}
              xs={10}
              className=" d-flex flex-column justify-content-sm-start justify-content-end"
            >
              <p className=" ff_rubik clr_white fw-medium fs_3xl lh_120 mb_15 text-start">
                We Know What We Do
              </p>
              <p className=" opacity_07 ff_rubik clr_white fw-normal mb-0 fs_md text-start">
                We’ve been there, done this. Actually, we have been doing this
                for over a decade, pouring all our time, energy, and resources
                into sourcing the best products for you and providing them at
                the most competitive prices in the market. We pay meticulous
                attention to our refurbishing process, ensuring we deliver
                premium products that stand the test of time and comply with our
                quality standards.
              </p>
            </Col>
          </Row>
          {/* 2 */}
          <Row className="justify-content-md-between align-items-end align-items-sm-start justify-content-end position-relative road_circle1 mt-5 flex-sm-row flex-column">
            <Col
              md={5}
              sm={5}
              xs={10}
              className=" d-flex d-md-none justify-content-sm-end justify-content-start"
            >
              <p className="text-sm-end lh_normal_sm opacity_03 ff_rubik fw-bolder fs_7xl mb-0 roadmap_text text-start">
                02
              </p>
            </Col>
            <Col md={5} sm={6} xs={10}>
              <p className=" ff_rubik clr_white fw-medium fs_3xl text-md-end text-start lh_120 mb_15">
                It’s All About What Adds Value For You
              </p>
              <p className=" opacity_07 ff_rubik clr_white fw-normal text-md-end text-start mb-0 fs_md">
                We may not be the only tech solutions company in the industry,
                but we are the leading one. Since the beginning of our journey
                in the tech world, we have been striving to establish an
                uncompromising level of quality, bringing value with all our
                products and services. The biggest proof of our exceptional
                performance is our strong base of happy clients that keeps
                growing every day. Be it a retailer, a carrier, a distributor, a
                repair shop, or a consumer, we work hard to provide you with the
                most profitable tech alternatives regardless of your business
                size and requirements.
              </p>
            </Col>
            <Col xs={5} className=" d-md-flex d-none justify-content-start">
              <p className="text-end opacity_03 ff_rubik fw-bolder fs_7xl mb-0 roadmap_text text-start">
                02
              </p>
            </Col>
          </Row>
          {/* 3 */}
          <Row className="justify-content-md-between align-items-end align-items-sm-start flex-sm-row flex-column justify-content-end position-relative road_circle1 trlateY_-20 mt-5">
            <Col md={5} sm={5} xs={10}>
              <p className="text-sm-end lh_normal_sm text-start opacity_03 ff_rubik fw-bolder fs_7xl mb-0 roadmap_text">
                03
              </p>
            </Col>
            <Col
              md={5}
              sm={6}
              xs={10}
              className=" d-flex flex-column justify-content-start"
            >
              <p className=" ff_rubik clr_white fw-medium fs_3xl lh_120 mb_15 ">
                However Far Away, We Will Always Serve You
              </p>
              <p className=" opacity_07 ff_rubik clr_white fw-normal mb-0 fs_md">
                Whether on a tropical island in Asia or a European metropolis,
                we will deliver you the smartphone or service of your preference
                with zero hassle. As an international distributor, we take great
                pride in being able to serve every business or individual from
                across the globe. Choose from a large panel of iPhones and tech
                services, and our team will guarantee it gets to you without
                stress or extra worries. 
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
