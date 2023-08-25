import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import sec1 from "../assets/images/png/sec1.png";
import sec2 from "../assets/images/png/sec2.png";
import sec3 from "../assets/images/png/sec3.png";
const Sec1 = () => {
  return (
    <>
      <section className="position-relative py-5 z-3 overflow_x_hidden">
        <div className="blue_ellipse"></div>
        <div className="blue_ellipse2"></div>
        <div className="green_ellipse"></div>
        <Container className="pb-5">
          <Row className="align-items-center justify-content-between">
            <Col lg={6}>
              <div>
                <img className="mh_341px w-100" src={sec1} alt="sec1" />
              </div>
            </Col>
            <Col lg={5} className="pt-lg-0 pt-4">
              <div className="d-flex align-items-start">
                <div>
                  <p className="color_white90 ms-4 ms-sm-0 mw_405 ff_rubik fw-normal fs_xl mb-0  greenlinepera position-relative">
                    SCal Mobile marked its presence in
                    <span className="clr_blue37"> 2010</span>. Since then, we
                    have been working tirelessly around the idea of providing
                    customers with premium devices and services that change the
                    norm in the smartphone re-commerce industry, moving into a
                    new, more efficient era.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center flex-column-reverse flex-lg-row justify-content-lg-between justify-content-center">
            <Col lg={5} className="pt-lg-0 pt-4">
              <div className="d-flex align-items-start">
                <div>
                  <p className="color_white90 ms-4 ms-sm-0 ff_rubik fw-normal mw_405 fs_xl mb-0  greenlinepera position-relative">
                    What started as a small US-based business has now evolved
                    into an international industry leader, operating in North
                    and South America, Asia, Europe, and Australia. Despite our
                    worldwide growth, our vision remains the same; to satisfy
                    all your device-sourcing needs.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={5} md={9}>
              <div className="pt-lg-0 pt-5">
                <img className="mh_341px w-100 " src={sec2} alt="sec2" />
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-lg-between justify-content-center pt-5 pt-lg-0">
            <Col lg={5} md={9}>
              <div>
                <img className="mh_341px w-100 " src={sec3} alt="sec3" />
              </div>
            </Col>
            <Col lg={5} className="pt-lg-0 pt-4">
              <div className="d-flex align-items-start">
                <div className="pt-4 pt-lg-0">
                  <p className="color_white90 ms-4 ms-sm-0 mw_405 ff_rubik fw-normal fs_xl mb-0  greenlinepera position-relative">
                    From retailers, carriers, distributors, and repair shops to
                    individual consumers, we cater to diverse needs, following a
                    client-centric approach that puts your specific requirements
                    in the spotlight.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-flex align-items-center justify-content-center w-100 py-3 mt-5 mb_70px pt-5 position-relative z-1 ">
            <div className="mw_881px  py-4 secpera px-lg-5 bg_lg_blue">
              <div className="position-relative">
                <div className="peracenter_shadow"></div>
                <p className="text-center ff_rubik fw-medium fs_lg color_white py-2 px-sm-5 mb-0">
                  Browse our wide assortment of smartphones and services, find
                  what responds to your demands, and let us do what we know
                  best; offer you the most pleasant, smooth, and stress-free
                  client experience.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Sec1;
