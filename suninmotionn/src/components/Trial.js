import React, { useEffect } from "react";
import "../index.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Trial = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container",
          scrub: 0.3,
          start: "top top",
          markers: true,
          pin: true,
        },
      })
      .to(".region", {
        display: "block",
        duration: 1,
        ease: "none",
        stagger: {
          each: 2,
          yoyo: true,
          repeat: 1,
        },
      });
  }, []);

  //https://greensock.com/forums/topic/27806-scroll-based-accordion/
  //https://github.com/andrii-maglovanyi/react-scrollable-accordion#readme
  return (
    <div class="container">
      <div class="container_text">
        <div class="accordion">
          <h1>Top Comment</h1>
          <div role="region" class="region">
            <p>Down Comment</p>
          </div>
        </div>
        <div class="accordion">
          <h1>Top Comment</h1>
          <div role="region" class="region">
            <p>Down Comment</p>
          </div>
        </div>
        <div class="accordion">
          <h1>Top Comment</h1>
          <div role="region" class="region">
            <p>Down Comment</p>
          </div>
        </div>
        <div class="accordion">
          <h1>Top Comment</h1>
          <div role="region" class="region">
            <p>Down Comment</p>
          </div>
        </div>
        <div class="accordion">
          <h1>Top Comment</h1>
          <div role="region" class="region">
            <p>Down Comment</p>
          </div>
        </div>
      </div>
      <div class="container_image"></div>
    </div>
  );
};

export default Trial;
