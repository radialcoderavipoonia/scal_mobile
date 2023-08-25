import React from "react";
import Preloaderimg from "../assets/images/png/preloader_img.png";
const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 2000);

  return (
    <div
      id="none"
      className="min-vh-100 w-100 position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <span className="z-15 w-50 d-flex flex-column justify-content-center align-items-center">
          <img src={Preloaderimg} alt="Preloaderimg" className="w-50" />
          <div className="d-inline-block">
            <p className="ff_rubik fw-bold fs_5xl text-white mb-0 pt-4 typed">
              SCAL MOBILE
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Preloader;
