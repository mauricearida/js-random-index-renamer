import React from "react";
import "../index.css";
import Slider from "react-slick";

const Releasedcollection = () => {
  var settings = {
    // rtl: true,
    swipeToSlide: true,
    infinite: true,
    dots: false,

    autoplay: true,
    speed: 400,
    slidesToShow: 8,
    // initialSlide: 0,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="carousel-main">
      <div className="slider-title d-flex flex-column">
        <h1>
          Released <br />
          Collection
        </h1>
        <p className="m-0">
          Lorem ipsum dolor sit amet. Ut <br /> .repellendus iusto aut nihil
        </p>
      </div>
      <div className="releasedcollection-main">
        <div className="slider-div">
          <Slider className="normal-one" {...settings}>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 703 1527"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.75"
                  width="701.75"
                  height="1527"
                  rx="344"
                  fill="url(#paint0_linear_37_22)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_22"
                    x1="351.625"
                    y1="0"
                    x2="351.625"
                    y2="1527"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9BC354" />
                    <stop offset="1" stop-color="#50AE98" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 702 1527"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="701.75"
                  height="1527"
                  rx="344"
                  fill="url(#paint0_linear_37_15)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_15"
                    x1="-3.75729e-06"
                    y1="792.5"
                    x2="702"
                    y2="794.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#46A0AA" />
                    <stop offset="1" stop-color="#030211" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_88)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_88"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D64D58" />
                    <stop offset="1" stop-color="#2B2570" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_89"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#76DBB3" />
                    <stop offset="1" stop-color="#69BCF1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 702 1527"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  width="701.75"
                  height="1527"
                  rx="344"
                  fill="url(#paint0_linear_37_18)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_18"
                    x1="351.125"
                    y1="0"
                    x2="351.125"
                    y2="1527"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E66381" />
                    <stop offset="0.0001" stop-color="#ECB54F" />
                    <stop offset="1" stop-color="#EC5A30" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_89"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#76DBB3" />
                    <stop offset="1" stop-color="#69BCF1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_89"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#76DBB3" />
                    <stop offset="1" stop-color="#69BCF1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 703 1527"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.75"
                  width="701.75"
                  height="1527"
                  rx="344"
                  fill="url(#paint0_linear_37_22)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_22"
                    x1="351.625"
                    y1="0"
                    x2="351.625"
                    y2="1527"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9BC354" />
                    <stop offset="1" stop-color="#50AE98" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 702 1527"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="701.75"
                  height="1527"
                  rx="344"
                  fill="url(#paint0_linear_37_15)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_15"
                    x1="-3.75729e-06"
                    y1="792.5"
                    x2="702"
                    y2="794.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#46A0AA" />
                    <stop offset="1" stop-color="#030211" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_88)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_88"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D64D58" />
                    <stop offset="1" stop-color="#2B2570" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_89"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#76DBB3" />
                    <stop offset="1" stop-color="#69BCF1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 702 1527"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  width="701.75"
                  height="1527"
                  rx="344"
                  fill="url(#paint0_linear_37_18)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_18"
                    x1="351.125"
                    y1="0"
                    x2="351.125"
                    y2="1527"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E66381" />
                    <stop offset="0.0001" stop-color="#ECB54F" />
                    <stop offset="1" stop-color="#EC5A30" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_89"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#76DBB3" />
                    <stop offset="1" stop-color="#69BCF1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_89"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#76DBB3" />
                    <stop offset="1" stop-color="#69BCF1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 703 1527"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.75"
                  width="701.75"
                  height="1527"
                  rx="344"
                  fill="url(#paint0_linear_37_22)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_22"
                    x1="351.625"
                    y1="0"
                    x2="351.625"
                    y2="1527"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9BC354" />
                    <stop offset="1" stop-color="#50AE98" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 702 1527"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="701.75"
                  height="1527"
                  rx="344"
                  fill="url(#paint0_linear_37_15)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_15"
                    x1="-3.75729e-06"
                    y1="792.5"
                    x2="702"
                    y2="794.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#46A0AA" />
                    <stop offset="1" stop-color="#030211" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_88)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_88"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D64D58" />
                    <stop offset="1" stop-color="#2B2570" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_89"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#76DBB3" />
                    <stop offset="1" stop-color="#69BCF1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 702 1527"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.25"
                  width="701.75"
                  height="1527"
                  rx="344"
                  fill="url(#paint0_linear_37_18)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_18"
                    x1="351.125"
                    y1="0"
                    x2="351.125"
                    y2="1527"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E66381" />
                    <stop offset="0.0001" stop-color="#ECB54F" />
                    <stop offset="1" stop-color="#EC5A30" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_89"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#76DBB3" />
                    <stop offset="1" stop-color="#69BCF1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="slider-svg"
                viewBox="0 0 282 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="281.642"
                  height="554.886"
                  rx="140.821"
                  fill="url(#paint0_linear_522_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_522_89"
                    x1="140.821"
                    y1="0"
                    x2="140.821"
                    y2="554.886"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#76DBB3" />
                    <stop offset="1" stop-color="#69BCF1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Releasedcollection;
