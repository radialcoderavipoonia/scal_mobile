import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ProductsCard } from "./Helper";
const Products = () => {
  return (
    <>
      <section className=" position-relative py-5 mb-xl-5 z-0">
        <div className="sec_shadow z-0"></div>
        <h2 className="text-center ff_rubik fw-medium fs_4xl color_white mb-0">
          Products
        </h2>
        <Container className="my_container pb-xl-5">
          <Row className="pt-5 mt-5">
            {ProductsCard.map((phone) => {
              return (
                <Col lg={4} md={6} key={phone.id} className="py-4 ">
                  <div className="d-flex flex-column align-items-center  pb-lg-5 py-3 bg_blur  px-4 hover_pro transition_300ms h-100 bg_pro">
                    <div className="pt-5">
                      <img src={phone.pro1} alt="pro1" />
                    </div>
                    <div className="proshadow mb-4"></div>
                    <p className="ff_rubik fst-italic color_sky fs_lg">
                      {phone.italictext}
                    </p>
                    <h5 className="color_white ff_ribik fw-normal fs_xl text-center">
                      {phone.heading}
                    </h5>
                    <p className="ff_rubuik fw-normal fs_md color_whitelight text-center pt-2  mb-xl-5">
                      {phone.bigpara}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
