import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import pro1 from "../assets/images/webp/product_1.webp";
import pro2 from "../assets/images/webp/product_2.webp";
import pro3 from "../assets/images/webp/product_3.webp";
import ps from "../assets/images/svg/proshadow.svg";
const Products = () => {
  return (
    <>
      <section className="bg_body position-relative">
        <div className="sec_shadow"></div>
        <h2 className="text-center ff_rubik fw-medium fs_4xl color_white mb-0">
          Products
        </h2>
        <Container className="my_container">
          <Row className="pt-5 mt-5">
            <Col lg={4} md={6} className="py-4 ">
              <div className="d-flex flex-column align-items-center bg_pro pb-lg-5 py-3 bg_blur  px-4 hover_pro transition_30ms h-100">
                <div className="pt-5">
                  <img src={pro1} alt="pro1" />
                </div>
                <div className="shadow">
                  <img className="w-100" src={ps} alt="ps" />
                </div>
                <p className="ff_rubik fst-italic color_sky fs_lg">iPhones</p>
                <h5 className="color_white ff_ribik fw-normal fs_xl text-center">
                  High-End Smartphones Without The High Price Tag
                </h5>
                <p className="ff_rubuik fw-normal fs_md color_whitelight text-center pt-2  mb-xl-5">
                  SCal Mobile houses premium quality iPhones that are available
                  at ultra-competitive prices. From the latest models to update
                  your collection to old phones in perfect condition, at SCal
                  Mobile, you will find everything you need in numerous colors
                  and storage capacities.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="py-4 ">
              <div className="d-flex flex-column align-items-center bg_pro pb-lg-5 py-3 bg_blur  px-4 hover_pro transition_30ms h-100">
                <div className="pt-5">
                  <img src={pro2} alt="pro1" />
                </div>
                <div className="shadow">
                  <img className="w-100" src={ps} alt="ps" />
                </div>
                <p className="ff_rubik fst-italic color_sky fs_lg">Grading</p>
                <h5 className="color_white ff_ribik fw-normal fs_xl text-center">
                  Products That Live Up To All Expectations
                </h5>
                <p className="ff_rubuik fw-normal fs_md color_whitelight text-center pt-2  mb-xl-5">
                  We wish to free clients from the fear of buying poor-quality
                  smartphones from the secondary mobile phone industry. That is
                  why all our products are thoroughly checked. They go through a
                  60-point techinical inspection process to identify cosmetic or
                  functional problems. We also follow a strict grading system
                  that includes A, AB, and fallout grades to ensure your phone
                  will look and work perfectly. 
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="py-4 ">
              <div className="d-flex flex-column align-items-center bg_pro pb-lg-5 py-3 bg_blur  px-4 hover_pro transition_30ms h-100">
                <div className="pt-5">
                  <img src={pro3} alt="pro1" />
                </div>
                <div className="shadow">
                  <img className="w-100" src={ps} alt="ps" />
                </div>
                <p className="ff_rubik fst-italic color_sky fs_lg">Warranty</p>
                <h5 className="color_white ff_ribik fw-normal fs_xl text-center">
                  High-End Smartphones Without The High Price Tag
                </h5>
                <p className="ff_rubuik fw-normal fs_md color_whitelight text-center pt-2  mb-xl-5">
                  If you face an issue with your order, we offer a standard
                  45-day warranty that includes any device defect to give you
                  that much-needed confidence and calm during the purchase. 
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
