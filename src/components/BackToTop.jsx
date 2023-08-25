import React, { useState } from "react";
import { Container } from "react-bootstrap";
const BackToTop = () => {
  const [first, setfirst] = useState(true);
  const onTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section>
      <Container>
        <div className="z_index_10 position-relative">
          <span
            onClick={() => onTop()}
            className={`backtotop_btn bg_topback position-fixed d-flex justify-content-center align-items-center hover_circle_animation ${
              first ? "d-none" : "d-block"
            }`}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 11L12 5L18 11M6 19L12 13L18 19"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default BackToTop;
