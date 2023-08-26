import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { SliderCards } from "./Helper";
import { Col } from "react-bootstrap";
const Services = () => {
  return (
    <>
      <section className="Services_bg py-md-5 pb-5" id="services">
        <div className="container my_container py-5 my-xl-4">
          <h2 className="ff_rubik fw-medium fs_4xl text-center mb-0 text-white pt-1">
            Services
          </h2>
          <div className="d-flex justify-content-center align-items-center">
            <p className="ff_rubik fs_md fw-normal opacity_07 text-white text-center mw_805 mb-4 mb-xl-5">
              We sell products, but we are a service-based company. We’ll work
              with you to personalize solutions to your specific requirements.
              Below are some of our commonly requested services.
            </p>
          </div>

          <div className=" pt-md-3 pt-xl-2 ">
            <Splide
              hasTrack={false}
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                breakpoints: {
                  992: {},
                  992: {
                    perPage: 2,
                    gap: "2rem",
                  },
                  768: {
                    perPage: 1,
                    gap: "2rem",
                  },
                },
              }}
            >
              <div className="d-xl-block d-none">
                <div className="splide__arrows position-relative top_1280 top_300">
                  <button className="splide__arrow splide__arrow--prev left_arrow "></button>
                  <button className="splide__arrow splide__arrow--next right_arrow"></button>
                </div>
              </div>
              <SplideTrack>
                {SliderCards.map((slide) => {
                  return (
                    <SplideSlide
                      className="d-flex"
                      data-aos="flip-left"
                      data-aos-duration="1500"
                    >
                      <div key={slide.id}>
                        <Col lg={11} className="mx-lg-2 h-100 pb-1">
                          <div className="Services_card mx-sm-4 mx-md-0">
                            <div className="text-center">
                              <img
                                height={91}
                                width={91}
                                src={slide.imglogo}
                                alt="slide card img"
                              />
                              <span className="card_ellipse"></span>
                              <p className="ff_rubik fst-italic fs_md fw-normal opacity_07 mb-0 text-white pt-3">
                                {slide.opacitypara}
                              </p>
                              <h3 className="ff_rubik fw-bold fs_xl text-white mb-0 pt-1">
                                {slide.heading}
                              </h3>
                              <p className="pt-3 ff_rubik fs_md fw-normal text-white opacity_07 mb-0">
                                {slide.bigpara}
                              </p>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </SplideSlide>
                  );
                })}
              </SplideTrack>
            </Splide>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
