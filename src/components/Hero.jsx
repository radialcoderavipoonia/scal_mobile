import React from "react";
import { Container } from "react-bootstrap";
import heromap from "../assets/images/webp/hero_map.webp";
import MyNav from "./MyNav";
export const Hero = () => {
  return (
    <>
      <div
        className="mb-0 d-flex flex-column justify-content-center min_vh_100_custom position-relative z-3"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <div className=" hero_green_shadow position-absolute scale_animation "></div>
        <MyNav />
        <Container className="my_container pt-4 mt-2 flex-grow-1 d-flex flex-column justify-content-center">
          <p className="clr_white ff_rubik text-center fw-medium lh_112 mb-2 fs_5xl mt-5">
            Redefining the Smartphone Re-
            <span className=" d-block">Commerce Industry Since 2010</span>
          </p>
          <p className="ff_rubik fs_xl fw-normal text-center clr_white opacity_09 mt-1 mb-5 position-relative hero_red_shadow">
            Serving customers across North America, South America, Europe,
            <span className=" d-sm-block">Australia, and Asia</span>
          </p>
          <div className="position-relative z-1">
            <img src={heromap} alt="heromap" className="w-100" />
          </div>
        </Container>
      </div>
    </>
  );
};
