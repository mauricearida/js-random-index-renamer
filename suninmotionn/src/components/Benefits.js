import React, { useRef } from "react";
import "../index.css";

const Benefits = () => {
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("reached bottom");
      }
    }
  };

  return (
    <div
      onScroll={onScroll}
      ref={listInnerRef}
      className="benefits-main d-flex flex-column position-relative"
    >
      <div>
        <h2 id="benefits">Benefits</h2>
        <p>Lorem ipsum dolor sit amet. Ut repellendus iusto .</p>
      </div>
      <div className="horizontal d-flex">
        <div className="scrollable-thing">
          <div>
            <h3 style={{ color: "white" }}>01 First Benefit</h3>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet. Ut repellendus iusto, Lorem ipsum
              dolor sit amet. Ut repellendus iusto. Lorem ipsum sitamet. Ut
            </p>
          </div>
          <div>
            <h3 style={{ color: "white" }}>01 First Benefit</h3>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet. Ut repellendus iusto, Lorem ipsum
              dolor sit amet. Ut repellendus iusto. Lorem ipsum sitamet. Ut
            </p>
          </div>
          <div>
            <h3 style={{ color: "white" }}>01 First Benefit</h3>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet. Ut repellendus iusto, Lorem ipsum
              dolor sit amet. Ut repellendus iusto. Lorem ipsum sitamet. Ut
            </p>
          </div>
          <div>
            <h3 style={{ color: "white" }}>01 First Benefit</h3>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet. Ut repellendus iusto, Lorem ipsum
              dolor sit amet. Ut repellendus iusto. Lorem ipsum sitamet. Ut
            </p>
          </div>
          <div>
            <h3 style={{ color: "white" }}>01 First Benefit</h3>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet. Ut repellendus iusto, Lorem ipsum
              dolor sit amet. Ut repellendus iusto. Lorem ipsum sitamet. Ut
            </p>
          </div>
        </div>
        <div className="blue-pill"></div>
      </div>
      <svg
        className="actual-blue-pill"
        viewBox="0 0 839 823"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-165"
          y="423.048"
          width="1625"
          height="799"
          rx="399.5"
          transform="rotate(-45 -165 423.048)"
          fill="url(#paint0_linear_461_17)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_461_17"
            x1="647.5"
            y1="423.048"
            x2="647.5"
            y2="1222.05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#76DBB3" />
            <stop offset="1" stopColor="#69BCF1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Benefits;
