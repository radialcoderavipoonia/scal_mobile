import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import flogo from "../assets/images/webp/flogo.webp";
import fb from "../assets/images/webp/fbfooter.webp";
import insta from "../assets/images/webp/instafooter.webp";
import linked from "../assets/images/webp/linkinfooter.webp";
import twitter from "../assets/images/webp/twitterfooter.webp";
const Myfooter = () => {
  return (
    <>
      <footer
        className="position-relative footer_bg z-3 pt-5"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Container className="my_container">
          <Row className="justify-content-between">
            <Col lg={3} md={6}>
              <a href="#">
                <img src={flogo} alt="flogo" height={126} width={111} />
              </a>
              <p className="text-start color_light fs_md ff_rubik fw-normal mt-4 ps-2 mb-5">
                SCal Mobile is a U.S. tech solutions company that specializes in
                consumer electronics.
              </p>
            </Col>
            <Col lg={5} md={6} className="pt-3">
              <div className="d-flex">
                <div className="pe-sm-5 pe-4">
                  <h5 className="color_white ff_rubik fw-normal fs_xl pb-2 mb-0">
                    Links
                  </h5>
                  <ul className="ps-0 footer_ul pt-1 mb-0">
                    <li>
                      <a className="ws_nowrap" href="#aboutus">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#products">Products</a>
                    </li>
                    <li>
                      <a href="#">Partners</a>
                    </li>
                    <li>
                      <a href="#faqs">FAQs</a>
                    </li>
                  </ul>
                </div>
                <div className="ps-sm-5 ps-4">
                  <h5 className="color_white ff_rubik fw-normal fs_xl pb-2 mb-0">
                    Legal
                  </h5>
                  <p className="ff_rubik fs_md fw-normal color_light mw_246 pt-1 mb-0">
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
        <Container className="my_container">
          <div className="d-sm-flex justify-content-between align-items-center py-4">
            <div>
              <p className="ff_rubik color_light fs_md mb-0">
                Copyright © 2022 ScalMobile
              </p>
            </div>
            <div className="pt-sm-0 pt-3 pe-xl-5 me-xxl-5">
              <a href="https://www.facebook.com/login/" target="_blank">
                <img
                  className="me-3 icons_hover transition_300ms btn_hover"
                  height={30}
                  width={30}
                  src={fb}
                  alt="facebook"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img
                  className="me-3 icons_hover transition_300ms btn_hover"
                  height={30}
                  width={30}
                  src={insta}
                  alt="insta"
                />
              </a>
              <a
                href="https://www.linkedin.com/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D5559396%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522state%2522%253A%2522meGCSbmnVSKVGlKJyIh6hX63gZhC5oGvYLN60Hm3%2522%252C%2522appId%2522%253A5559396%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1669627129674%252C%2522redirectUri%2522%253A%2522https%253A%252F%252F24slides%2Ecom%252Ftemplates%252Fauth%252Fsocial%252Fcallback%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D5559396%26auth_type%3DAC%26flow%3D%257B%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522state%2522%253A%2522meGCSbmnVSKVGlKJyIh6hX63gZhC5oGvYLN60Hm3%2522%252C%2522appId%2522%253A5559396%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1669627129674%252C%2522redirectUri%2522%253A%2522https%253A%252F%252F24slides%2Ecom%252Ftemplates%252Fauth%252Fsocial%252Fcallback%2522%257D"
                target="_blank"
              >
                <img
                  className="me-3 icons_hover transition_300ms btn_hover"
                  height={30}
                  width={30}
                  src={linked}
                  alt="linked"
                />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img
                  className="me-3 icons_hover transition_300ms btn_hover"
                  height={30}
                  width={30}
                  src={twitter}
                  alt="twitter"
                />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Myfooter;
