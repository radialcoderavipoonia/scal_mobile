import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import sec1 from "../assets/images/webp/sec1.webp";
import sec2 from "../assets/images/webp/sec2.webp";
import sec3 from "../assets/images/webp/sec3.webp";
import Aos from "aos";
const Sec1 = () => {
  Aos.init();
  return (
    <>
      <section className="position-relative py-lg-5  py-lg-4 pt-5 mt-xl-4 z-1 overflow_x_hidden">
        <div className="blue_ellipse scale_animation"></div>
        <div className="blue_ellipse2 scale_animation"></div>
        <div className="green_ellipse scale_animation"></div>
        <div className="red_back"></div>
        <div className="pb-5 mt-2 my_container container">
          <Row className="align-items-center justify-content-lg-between justify-content-center  mt-xs-0 mt-5">
            <Col
              lg={6}
              xs={11}
              sm={10}
              md={8}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div>
                <img className="mh_221 w-100" src={sec1} alt="sec1" />
              </div>
            </Col>
            <Col
              lg={5}
              className="pt-lg-0 pt-3"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="d-flex align-items-start justify-content-center">
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
            <Col
              lg={5}
              className="pt-lg-0 pt-3 "
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="d-flex align-items-start justify-content-center ml_40">
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
            <Col
              lg={5}
              xs={10}
              md={6}
              sm={9}
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="pt-lg-0 pt-5">
                <img className="mh_221 w-100 " src={sec2} alt="sec2" />
              </div>
            </Col>
          </Row>

          <Row className="align-items-center justify-content-lg-between justify-content-center pt-5 mt-xs-0 mt-4 pb-4 pt-lg-0">
            <Col
              lg={5}
              xs={10}
              sm={9}
              md={6}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div>
                <img className="mh_221 w-100 " src={sec3} alt="sec3" />
              </div>
            </Col>
            <Col
              lg={5}
              className="pt-lg-0 pt-3 "
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="d-flex align-items-start justify-content-center">
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
          <div
            className="d-flex align-items-center justify-content-center w-100 mt-md-5 mb-xl-5 pt-3 position-relative z-1 "
            data-aos="flip-left"
            data-aos-duration="1500"
          >
            <div className="mw_881 mb-md-5 my-md-0 my-3 py-4 secpera px-lg-5 bg_lg_blue">
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
        </div>
      </section>
    </>
  );
};

export default Sec1;
