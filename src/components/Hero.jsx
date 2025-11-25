import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { heroVideo } from "../assets";

const Hero = () => {
  const [videoSrc] = useState(heroVideo);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.2,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -40,
      delay: 1.4,
    });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col px-4">
        <p
          id="hero"
          className="hero-title text-center leading-tight text-[40px] md:text-[80px]"
        >
          Biomoleculai
        </p>

        <div className="w-full max-w-[700px] mx-auto mt-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-xl object-cover"
            src={videoSrc}
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Hero;

