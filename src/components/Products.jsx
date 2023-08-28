import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ProductsCard } from "./Helper";
const Products = () => {
  return (
    <>
      <section className="position-relative z-0 my-md-5 my-xs-4 py-5" id="products">
        <div className="sec_shadow z-0 scale_animation"></div>
        <h2 className="text-center ff_rubik fw-medium fs_4xl color_white mb-0">
          Products
        </h2>
        <Container className="my_container pb-xl-5">
          <Row className="pt-lg-5 pt-xs-3 mt-xs-5 mt-4 pt-2 justify-content-center">
            {ProductsCard.map((phone) => {
              return (
                <Col
                  lg={4}
                  md={6}
                  key={phone.id}
                  className="py-xs-4 py-2 pt-xs-3" 
                  data-aos="flip-right"
                  data-aos-duration="3000"
                >
                  <div className="d-flex flex-column align-items-center mx-md-0 mx-sm-4 pb-lg-5 py-3 bg_blur  px-4 hover_pro transition_300ms h-100 bg_pro">
                    <div className="pt-5">
                      <img src={phone.pro1} alt="pro1" />
                    </div>
                    <div className="proshadow mb-4"></div>
                    <p className="ff_rubik fst-italic color_sky fs_lg">
                      {phone.italictext}
                    </p>
                    <h5 className="color_white ff_rubik fw-normal fs_xl text-center">
                      {phone.heading}
                    </h5>
                    <p className="ff_rubik fw-normal fs_md color_whitelight text-center pt-2  mb-xl-5">
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
