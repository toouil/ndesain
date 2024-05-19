"use client";

import { useRef, useState } from "react";
import { LONG_ARROW } from "@/assets/icons";
import { useGSAP } from "@gsap/react";
import style from "@/styles/Venue.module.css";
import gsap from "@/helpers/GSAP";
import VenueCover from "./UI/VenueCover";
import { venues } from "@/content";

export default function Venue() {
  const ref = useRef();
  const reff = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxDistance = venues.length - 1;

  const handleActiveVenue = (step) => {
    const getCurrentIndex = Math.max(
      Math.min(currentIndex + step, venues.length - 1),
      0
    );
    setCurrentIndex(getCurrentIndex);
  };

  useGSAP(() => {
    gsap.from(reff.current, {
      scale: 0.5,
      y: 200,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
  });

  return (
    <section className={style.venueContainer} ref={ref}>
      <div className={style.venue} ref={reff}>
        <div className={style.top}>
          <h1>Explore The Best Venues</h1>
        </div>

        <div className={style.slides}>
          <div className={style.slidesBody}>
            <div className={style.coverSlides}>
              {venues.map((venue, index) => (
                <VenueCover
                  index={index}
                  image={venue.image}
                  currentIndex={currentIndex}
                  maxDistance={maxDistance}
                  key={venue.title}
                />
              ))}
            </div>

            <div className={style.info}>
              <div className={style.infoLeft}>
                <h1>{`0${currentIndex + 1}`}</h1>
              </div>
              <div className={style.infoRight}>
                <h2>{venues[currentIndex].title}</h2>
                <p>{venues[currentIndex].address}</p>
              </div>
            </div>
          </div>

          <div className={style.slidesButtons}>
            <button
              type="button"
              onClick={() => handleActiveVenue(1)}
              disabled={currentIndex >= maxDistance}
            >
              <LONG_ARROW deg={-45} key="prev_icon" />
            </button>
            <button
              type="button"
              onClick={() => handleActiveVenue(-1)}
              disabled={currentIndex <= 0}
            >
              <LONG_ARROW deg={45} key="next_icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
