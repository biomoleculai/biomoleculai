import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { heroVideo, smallHeroVideo } from "../assets";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(heroVideo);

  const handleVideoSrcSet = () => {
    setVideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

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
      <div className="flex-center h-5/6 w-full flex-col">

        {/* 保持原来的大尺寸布局：桌面和手机都是 9/12 / 10/12 宽度 */}
        <div className="w-9/12 md:w-10/12">
          <video
            autoPlay
            muted
            playsInline
            loop
            key={videoSrc}
            className="w-full h-auto pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <div
          id="cta"
          className="flex translate-y-20 flex-col items-center opacity-0"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
