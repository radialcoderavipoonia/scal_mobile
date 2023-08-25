import React from "react";
import { Col, Row } from "react-bootstrap";
import form_col_img from "../assets/images/webp/form_col_img.webp";

const ContactUs = () => {
  return (
    <>
      <div className="my_container container py-5 position-relative green_choose">
        <div className="d-flex justify-content-center align-items-center text-center mb-3 position-relative z-1">
          <div className="pb-4">
            <h2 className="text-white mb-0 ff_rubik fw-medium fs_4xl">
              Contact Us
            </h2>
            <p className="ff_rubik mb-0 fst-italic fw-normal fs_xl linear_skyblue_color pt-2">
              Join Our Family Of Partners
            </p>
            <div className="mw_899">
              <p className="ff_rubik fw-normal fs_md text-white opacity_07 pt-3 mb-0">
                Want to access unique products at unbeatable prices? Be one of
                the first to get their hands on the market’s ultimate
                smartphones?
              </p>
              <p className="ff_rubik fw-normal fs_md text-white opacity_07 pt-1 mb-0">
                If you have already nodded positively, this is your sign to
                partner with us and enter our ever-growing community of loyal
                members!
              </p>
              <p className="ff_rubik fw-normal fs_md text-white opacity_07 pt-1 mb-0">
                Being a SCal Mobile partner means you get solutions tailored to
                your business needs and access our daily and weekly inventory
                lists with numerous smartphone opportunities at the most
                competitive prices. We constantly update our catalogs to help
                you unlock the best deals in the secondary smartphone industry!
              </p>
              <p className="ff_rubik fw-bold fs_md text-white opacity_07 pt-1 mb-0">
                So, are you ready to earn more for less?
              </p>
              <p className="ff_rubik fw-normal fs_md text-white opacity_07 pt-1 mb-0">
                Fill out the contact form below, and we will take care of the
                rest.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <Row className="justify-content-between align-items-center flex-column-reverse flex-lg-row">
            <Col xl={5} lg={6}>
              <div className="d-flex justify-content-between align-items-center pt-lg-0 pt-5">
                <div className="w-100 pe-2">
                  <p className="ff_rubik fs_md fw-normal text-white opacity_07 mb-0 pb-2">
                    First Name*
                  </p>
                  <input
                    type="text"
                    className="w-100 mt-1 input_form text-white h_54 px-2"
                  />
                </div>
                <div className="w-100 ps-2">
                  <p className="ff_rubik fs_md fw-normal text-white opacity_07 mb-0 pb-2">
                    Last Name*
                  </p>
                  <input
                    type="text"
                    className="w-100 mt-1 input_form text-white h_54 px-2"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <div className="w-100 pe-2">
                  <p className="ff_rubik fs_md fw-normal text-white opacity_07 mb-0 pb-2">
                    Company Name*
                  </p>
                  <input
                    type="text"
                    className="w-100 mt-1 input_form text-white h_54 px-2"
                  />
                </div>
                <div className="w-100 ps-2">
                  <p className="ff_rubik fs_md fw-normal text-white opacity_07 mb-0 pb-2">
                    Phone Number*
                  </p>
                  <input
                    type="number"
                    className="w-100 mt-1 input_form text-white h_54 px-2"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <div className="w-100 pe-2">
                  <p className="ff_rubik fs_md fw-normal text-white opacity_07 mb-0 pb-2">
                    Email*
                  </p>
                  <input
                    type="email"
                    className="w-100 mt-1 input_form text-white h_54 px-2"
                  />
                </div>
                <div className="w-100 ps-2">
                  <p className="ff_rubik fs_md fw-normal text-white opacity_07 mb-0 pb-2">
                    Company Type*
                  </p>
                  <div class="dropdown input_form w-100 h_54">
                    <div className="d-flex justify-content-between p-3">
                      <span className="ff_rubik fs_md text-white opacity_07 fw-normal mb-0">
                        B2B
                      </span>
                      <svg
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.7">
                          <path
                            d="M15.8584 8.4474C15.6903 8.27934 15.4765 8.19531 15.2167 8.19531C14.957 8.19531 14.7431 8.27934 14.5751 8.4474L11.0001 12.0224L7.42507 8.4474C7.25701 8.27934 7.04312 8.19531 6.7834 8.19531C6.52368 8.19531 6.30979 8.27934 6.14173 8.4474C5.97368 8.61545 5.88965 8.82934 5.88965 9.08906C5.88965 9.34878 5.97368 9.56267 6.14173 9.73073L10.3584 13.9474C10.4501 14.0391 10.5494 14.1041 10.6563 14.1426C10.7633 14.1811 10.8778 14.2001 11.0001 14.1995C11.1223 14.1995 11.2369 14.1802 11.3438 14.1417C11.4508 14.1032 11.5501 14.0385 11.6417 13.9474L15.8584 9.73073C16.0265 9.56267 16.1105 9.34878 16.1105 9.08906C16.1105 8.82934 16.0265 8.61545 15.8584 8.4474Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 pt-3">
                <p className="ff_rubik fs_md fw-normal text-white opacity_07 mb-0 ">
                  Buyers
                </p>
                <div class="dropdown input_form w-100 h_54 mt-2">
                  <div className="d-flex justify-content-between p-3">
                    <span className="ff_rubik fs_md text-white opacity_07 fw-normal mb-0"></span>
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.7">
                        <path
                          d="M15.8584 8.4474C15.6903 8.27934 15.4765 8.19531 15.2167 8.19531C14.957 8.19531 14.7431 8.27934 14.5751 8.4474L11.0001 12.0224L7.42507 8.4474C7.25701 8.27934 7.04312 8.19531 6.7834 8.19531C6.52368 8.19531 6.30979 8.27934 6.14173 8.4474C5.97368 8.61545 5.88965 8.82934 5.88965 9.08906C5.88965 9.34878 5.97368 9.56267 6.14173 9.73073L10.3584 13.9474C10.4501 14.0391 10.5494 14.1041 10.6563 14.1426C10.7633 14.1811 10.8778 14.2001 11.0001 14.1995C11.1223 14.1995 11.2369 14.1802 11.3438 14.1417C11.4508 14.1032 11.5501 14.0385 11.6417 13.9474L15.8584 9.73073C16.0265 9.56267 16.1105 9.34878 16.1105 9.08906C16.1105 8.82934 16.0265 8.61545 15.8584 8.4474Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-100 pt-3">
                <p className="ff_rubik fs_md fw-normal text-white opacity_07 mb-0 ">
                  Message
                </p>
                <input
                  type="email"
                  className="w-100 mt-1 input_form text-white h_150 px-2"
                />
              </div>
              <div className="pt-5 text-center text-lg-start">
                <button className="ff_rubik fs_md fw-normal text-white nav_btn">
                  Send Now
                </button>
              </div>
            </Col>
            <Col xl={5} lg={5} sm={8}>
              <div className="position-relative">
                <img
                  src={form_col_img}
                  alt="form sumbition col image"
                  className="w-100 min_h_300"
                />
                <div className="big_circle_blue"></div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
