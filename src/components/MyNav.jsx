import React from "react";
import { RxCross2 } from "react-icons/rx";
import nav_logo from "../assets/images/webp/page_logo.webp";
import { Container } from "react-bootstrap";
const MyNav = () => {
  const [First, setFirst] = React.useState(true);
  function clickshow() {
    setFirst(!First);
  }
  if (!First) {
    document.body.classList.add("overflow_hidden_xl");
  } else {
    document.body.classList.remove("overflow_hidden_xl");
  }
  return (
    <>
      <div className="flex-grow-0 overflow-hidden nav_bottom_border position-relative">
        <Container className="my_container">
          {/* btn */}
          <div className="d-flex justify-content-between d-md-none align-items-center py-3">
            <span>
              <a href="#">
                <img
                  src={nav_logo}
                  alt="nav_logo"
                  width={72}
                  height={81}
                  className="z_10 position-relative animate__heartBeat"
                />
              </a>
            </span>
            <button className="nav_btn position-relative zindex_7_sm ff_rubik">
              Contact Us
            </button>
            <h2
              onClick={clickshow}
              className="pointer position-relative z_10 text-white ps-4 mb-0 fs_40"
            >
              {First ? (
                <div className="d-md-none nav_toggle_icon border-0 bg-transparent position-relative">
                  <span className="line1 position-absolute start-0 top-0 rounded-pill"></span>
                  <span className="line2 position-absolute start-0 top-50 translate-middle-y rounded-pill"></span>
                  <span className="line3 position-absolute start-0 bottom-0 rounded-pill"></span>
                </div>
              ) : (
                <RxCross2 />
              )}
            </h2>
          </div>
          {/* nav */}
          <div className={`nav_show ${First ? " " : "ps-0 showw"}`}>
            <div className="nav_height py-2 position-relative">
              <div>
                <div className="nav_container">
                  <div className="d-flex align-items-center flex-md-row flex-column justify-content-center justify-content-md-between nav_height">
                    <span className="d-md-block d-none me-3 z_10">
                      <a href="#">
                        <img
                          src={nav_logo}
                          alt="nav_logo"
                          width={72}
                          height={81}
                          className="animate__heartBeat"
                        />
                      </a>
                    </span>
                    {/* option */}
                    <div className="d-flex align-items-center">
                      <ul className="d-flex align-items-center mb-md-0 flex-md-row flex-column ps-0 gap-md-0 gap-2 mb-0">
                        <li>
                          <a
                            href="#"
                            onClick={clickshow}
                            className="ff_rubik opacity_07 clr_white fs_md fw-normal me-md-4 position-relative  hover_opacity_1"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="#aboutus"
                            onClick={clickshow}
                            className="opacity_07 ff_rubik clr_white fs_md fw-normal me-md-4 position-relative  hover_opacity_1"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#choose"
                            onClick={clickshow}
                            className="opacity_07 ff_rubik clr_white fs_md fw-normal position-relative  hover_opacity_1"
                          >
                            Why Choose Us
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button className="nav_btn d-md-block d-none ff_rubik">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyNav;
