import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
export const ChooseUs = () => {
  Aos.init();
  return (
    <div className="choose_bg py-md-5 py-3" id="choose">
      <Container className=" my_container my-xl-5 py_38">
        <p className="ff_rubik fw-medium text-center clr_white fs_4xl mb-0">
          Why Choose Us?
        </p>
        <p className="pb-md-5 clr_white ff_rubik fw-normal fs_md opacity_07 text-center mb-4">
          Here are a few good reasons that make SCal Mobile your no.1 choice:
        </p>
        <div className="position-relative road_line mt-5">
          {/* 1 */}
          <Row
            className="justify-content-md-between align-items-end align-items-sm-start flex-sm-row flex-column justify-content-end position-relative road_circle1 trlateY_-20 hover_circle"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <Col
              md={5}
              sm={3}
              xs={10}
              className=" justify-content-sm-end justify-content-start"
            >
              <p className="lh_normal_sm lh_120 opacity_03 ff_rubik fw_900 fs_7xl mb-0 roadmap_text text-start text-md-end">
                01
              </p>
            </Col>
            <Col
              md={5}
              sm={8}
              xs={10}
              className=" d-flex flex-column justify-content-sm-start justify-content-end"
            >
              <p className=" ff_rubik clr_white fw-medium fs_3xl lh_120 mb_15 mb-1 mt-2 text-start">
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

          <Row
            className="justify-content-md-between align-items-end align-items-sm-start justify-content-end position-relative road_circle1  mt-lg-2 mt-0 flex-sm-row flex-column"
            data-aos="fade-up-right"
            data-aos-duration="1500"
          >
            <Col
              md={5}
              sm={3}
              xs={10}
              className=" d-flex d-md-none justify-content-sm-start justify-content-start"
            >
              <p className="lh_120 lh_normal_sm opacity_03 ff_rubik fw_900 fs_7xl mb-0 roadmap_text text-start">
                02
              </p>
            </Col>
            <Col md={5} sm={8} xs={10}>
              <p className=" ff_rubik clr_white fw-medium fs_3xl text-md-end text-start lh_120 mb-1 mt-2 mb_15">
                It’s All About What Adds Value{" "}
                <span className="d-lg-block">For You</span>
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
              <p className="lh_120 opacity_03 ff_rubik fw_900 fs_7xl mb-0 roadmap_text text-start">
                02
              </p>
            </Col>
          </Row>
          {/* 3 */}
          <Row
            className="justify-content-md-between align-items-end align-items-sm-start flex-sm-row flex-column justify-content-end position-relative road_circle1 mt-lg-5 mt-4"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <Col md={5} sm={3} xs={10}>
              <p className="lh_120 lh_normal_sm text-start text-md-end opacity_03 ff_rubik fw_900 fs_7xl mb-0 roadmap_text">
                03
              </p>
            </Col>
            <Col
              md={5}
              sm={8}
              xs={10}
              className=" d-flex flex-column justify-content-start"
            >
              <p className=" ff_rubik clr_white fw-medium fs_3xl lh_120 mb-1 mt-2 mb_15 ">
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
