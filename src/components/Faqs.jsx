import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import faqimg from "../assets/images/png/faqs.png";
import Accordion from "react-bootstrap/Accordion";
const Faqs = () => {
  return (
    <>
      <section className="py-5 position-relative">
       
          <div className="my_container container position-relative">
            <Row className="justify-content-between align-items-center">
              <Col xl={5} lg={6}>
                <div className="position_absolute top_14 left_-20 mw_724 mx-auto">
                  <img src={faqimg} alt="faqimg" className="w-100 pb-lg-0 pb-4" width={724} />
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="d-flex flex-column justify-content-start">
                  <h4 className="ff_rubik fw-medium color_white fs_4 mb-0 fs_4xl">
                    FAQs
                  </h4>
                  <Accordion defaultActivekey="0" className="pt-3">
                    <Accordion.Item
                      className="border_top_bottom px-2"
                      evenKey="0"
                    >
                      <Accordion.Header>
                        <h4 className="ff_rubik fw-normal fs_xl text-white mb-0">
                          Q1. What is SCal Mobile?
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik fw-normal fs_md color_whitelight mw_473px">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="1"
                      className="border_top_bottom px-2"
                    >
                      <Accordion.Header>
                        <h4 className="ff_rubik fw-normal fs_xl text-white mb-0">
                          Q2. How long has SCal Mobile been in business?
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik fw-normal fs_md color_whitelight mw_473px">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      className="border_top_bottom px-2"
                      eventKey="2"
                    >
                      <Accordion.Header>
                        <h4 className="ff_rubik fw-normal fs_xl text-white mb-0">
                          Q3. Where does SCal Mobile operate?
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik fw-normal fs_md color_whitelight mw_473px">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      className="border_top_bottom px-2"
                      eventKey="3"
                    >
                      <Accordion.Header>
                        <h4 className="ff_rubik fw-normal fs_xl text-white mb-0">
                          Q4. What products does SCal Mobile offer?
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik fw-normal fs_md color_whitelight mw_473px">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      className="border_top_bottom px-2"
                      eventKey="4"
                    >
                      <Accordion.Header>
                        <h4 className="ff_rubik fw-normal fs_xl text-white mb-0">
                          Q5. How do I place an order with SCal Mobile?
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik fw-normal fs_md color_whitelight mw_473px">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      className="border_top_bottom px-2"
                      eventKey="5"
                    >
                      <Accordion.Header>
                        <h4 className="ff_rubik fw-normal fs_xl text-white mb-0">
                          Q6. How often is inventory updated?
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_rubik fw-normal fs_md color_whitelight mw_473px">
                          SCal Mobile is a U.S. tech solutions company
                          specializing in the recommerce of electronics. We
                          offer a wide range of iPhones and services, all at
                          competitive prices.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </div>
      </section>
    </>
  );
};

export default Faqs;
