import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import flogo from "../assets/images/png/flogo.png";
import fb from "../assets/images/png/fbfooter.png";
import insta from "../assets/images/png/instafooter.png";
import linked from "../assets/images/png/linkinfooter.png";
import twitter from "../assets/images/png/twitterfooter.png";
const Myfooter = () => {
  return (
    <>
      <footer className="position-relative footer_bg z-3 pt-5 pb-3">
        <Container>
          <Row className="justify-content-between">
            <Col lg={3} md={6}>
              <a href="#">
                <img src={flogo} alt="flogo" height={126} width={111} />
              </a>
              <p className="text-start color_light fs_md ff_rubik fw-normal mt-4 ps-2">
                SCal Mobile is a U.S. tech solutions company that specializes in
                consumer electronics.
              </p>
            </Col>
            <Col lg={5} md={6} className="pt-4">
              <div className="d-flex">
                <div className="pe-sm-5 pe-4">
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
                <div className="ps-sm-5 ps-4">
                  <h5 className="color_white ff_rubik fw-normal fs_xl pb-2">
                    Legal
                  </h5>
                  <p className="ff_rubik fs_md fw-normal color_light mw_246 mb-0">
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
              <img
                className="me-3 curser_pointer icons_hover transition_300ms"
                height={30}
                width={30}
                src={fb}
                alt="facebook"
              />
              <img
                className="me-3 curser_pointer icons_hover transition_300ms"
                height={30}
                width={30}
                src={insta}
                alt="insta"
              />
              <img
                className="me-3 curser_pointer icons_hover transition_300ms"
                height={30}
                width={30}
                src={linked}
                alt="linked"
              />
              <img
                className="me-3 curser_pointer icons_hover transition_300ms"
                height={30}
                width={30}
                src={twitter}
                alt="twitter"
              />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Myfooter;
