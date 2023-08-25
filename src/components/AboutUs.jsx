import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import aboutusimg from "../assets/images/webp/aboutus_col_img.webp";

const AboutUs = () => {
  const changeborder = {
    document,
  };
  return (
    <>
      <section className="py-5" id="aboutus">
        <div className="my_container container position-relative about_green">
          <h2 className="ff_rubik fs_4xl fw-medium text-lg-start text-center text-white mb-0">
            About Us
          </h2>
          <p className="ff_rubik fs_md fw-normal text-lg-start text-center text-white opacity_07 mb-0">
            We Started With A Single Goal:
          </p>
          <Row className="justify-content-lg-between flex-lg-row justify-content-center flex-column-reverse align-items-center">
            <Col lg={6} md={9} data-aos="zoom-out-up">
              <div className="about_us">
                <Accordion defaultActiveKey="0">
                  <div className="accordion_border my-3">
                    <Accordion.Item eventKey="0" className="position-relative">
                      <Accordion.Header>
                        <div className="d-flex gap-2 ">
                          <p className="mb-0">Q1. </p>
                          <p className="mb-0 mw_422">
                            To Become The Trusted Source For All Things
                            Smartphone In The International Re-Commerce World
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik pt-1 fw-normal fs_md text-white opacity_07 mb-0">
                          Our adventure started back in 2010 when we founded
                          SCal Mobile, a tech solutions company focused on
                          consumer electronics. It didn’t take us long to
                          understand that the US borders could not fit us,
                          expanding our operations across the globe. Today, we
                          are proud to serve North and South America as well as
                          Europe, Asia, and Australia.
                        </p>
                        <p className="ff_rubik  pt-1 fw-normal fs_md text-white opacity_07 mb-0">
                          Following a comprehensive market approach, we seek to
                          serve clients of all sizes, including big corporations
                          and consumers. That is why our company consists of two
                          highly complementary segments; a B2B wholesale trade
                          for businesses and a B2C business for consumers that
                          seek to level up their performance with smartphones
                          and premium tech services.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="accordion_border my-3">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="d-flex gap-2 ">
                          <p className="mb-0">Q2. </p>
                          <p className="mb-0 mw_422">
                            Doing Things The SCal Mobile Way
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik  pt-1 fw-normal fs_md text-white opacity_07 mb-0">
                          Our adventure started back in 2010 when we founded
                          SCal Mobile, a tech solutions company focused on
                          consumer electronics. It didn’t take us long to
                          understand that the US borders could not fit us,
                          expanding our operations across the globe. Today, we
                          are proud to serve North and South America as well as
                          Europe, Asia, and Australia.
                        </p>
                        <p className="ff_rubik  pt-1 fw-normal fs_md text-white opacity_07 mb-0">
                          Following a comprehensive market approach, we seek to
                          serve clients of all sizes, including big corporations
                          and consumers. That is why our company consists of two
                          highly complementary segments; a B2B wholesale trade
                          for businesses and a B2C business for consumers that
                          seek to level up their performance with smartphones
                          and premium tech services.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="accordion_border my-2">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <div className="d-flex gap-2 ">
                          <p className="mb-0">Q3.</p>
                          <p className="mb-0 mw_422">
                            We Stand By Our Core Values Of Integrity & Customer
                            Satisfaction
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik  pt-1 fw-normal fs_md text-white opacity_07 mb-0">
                          Our adventure started back in 2010 when we founded
                          SCal Mobile, a tech solutions company focused on
                          consumer electronics. It didn’t take us long to
                          understand that the US borders could not fit us,
                          expanding our operations across the globe. Today, we
                          are proud to serve North and South America as well as
                          Europe, Asia, and Australia.
                        </p>
                        <p className="ff_rubik  pt-1 fw-normal fs_md text-white opacity_07 mb-0">
                          Following a comprehensive market approach, we seek to
                          serve clients of all sizes, including big corporations
                          and consumers. That is why our company consists of two
                          highly complementary segments; a B2B wholesale trade
                          for businesses and a B2C business for consumers that
                          seek to level up their performance with smartphones
                          and premium tech services.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              </div>
            </Col>
            <Col lg={6} md={9} sm={11} data-aos="zoom-out-down">
              <div className="d-flex justify-content-center">
                <div className="position_absolute right_-100 top-0 mw_561">
                  <img
                    src={aboutusimg}
                    alt="about us col image"
                    className="w-100"
                    width={450}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
