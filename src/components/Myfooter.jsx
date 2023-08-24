import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import flogo from "../assets/images/webp/footer_logo.webp";
import fb from "../assets/images/webp/Frame 48.webp";
import insta from "../assets/images/webp/Frame 49.webp";
import linked from "../assets/images/webp/Frame 50.webp";
import twitter from "../assets/images/webp/Frame 51.webp";
const Myfooter = () => {
  return (
    <>
      <footer className="footer_bg z-3 pt-5 pb-3">
        <Container>
          <Row className="justify-content-between">
            <Col lg={3} md={6}>
              <img src={flogo} alt="flogo" />
              <p className="text-start color_light fs_md ff_rubik fw-normal mt-4 ps-2">
                SCal Mobile is a U.S. tech solutions company that specializes in
                consumer electronics.
              </p>
            </Col>
            <Col lg={5} md={6} className="pt-4">
              <div className="d-flex justify-content-between">
                <div className="pe-5">
                  <h5 className="color_white ff_rubik fw-normal fs_xl pb-2">
                    Links
                  </h5>
                  <ul className="ps-0 footer_ul pt-1">
                    <li>
                      <a className="ws_nowrap" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">Partners</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
                <div className="ps-xl-5">
                  <h5 className="color_white ff_rubik fw-normal fs_xl pb-2">
                    Legal
                  </h5>
                  <p className="ff_rubik fs_md fw-normal color_light">
                    Vendor Code of Conduct Data Sanitization Policy Downstream
                    Recycling Policy Environmental and Social Impact QEH&S
                    Policy Universal Waste Policy
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footerline"></div>
        <Container>
          <div className="d-sm-flex justify-content-between align-items-center pt-3">
            <div>
              <p className="ff_rubik color_light fs_md mb-0">
                Copyright © 2022 ScalMobile
              </p>
            </div>
            <div className="pt-sm-0 pt-3">
              <img className="pe-3 curser_pointer icons_hover transition_300ms" src={insta} alt="insta" />
              <img className="pe-3 curser_pointer icons_hover transition_300ms" src={linked} alt="linked" />
              <img className="pe-3 curser_pointer icons_hover transition_300ms" src={twitter} alt="twitter" />
              <img className="pe-3 curser_pointer icons_hover transition_300ms" src={fb} alt="facebook" />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Myfooter;
