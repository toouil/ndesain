"use client";

import gsap from "@/helpers/GSAP";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function SplitStyle({ text }) {
  const topCharacterRef = useRef([]);
  const bottomCharacterRef = useRef([]);

  const animateRef = useRef();
  const play = () => animateRef.current.play();
  const reverse = () => animateRef.current.reverse();

  const splitedText = text.split("");
  // const checkText = splitedText.length > 1 ? splitedText.map((word) => word.split("")) : splitedText[0].split("")

  useGSAP(() => {
    animateRef.current = gsap
      .timeline()
      .to(topCharacterRef.current, {
        y: "-100%",
        stagger: 0.04,
        duration: 0.25,
      })
      .to(
        bottomCharacterRef.current,
        {
          y: "-100%",
          stagger: 0.04,
          duration: 0.25,
        },
        "<"
      )
      .pause();
  });

  return (
    <div onMouseOver={play} onMouseOut={reverse} style={{ height: "100%", overflow: "hidden" }}>
      <div>
        {splitedText.map((part, index) => (
          <span
            key={index}
            ref={(element) => (topCharacterRef.current[index] = element)}
            style={{ display: "inline-block" }}
          >
            {part}
          </span>
        ))}
      </div>
      <div>
        {splitedText.map((part, index) => (
          <span
            key={index}
            ref={(element) => (bottomCharacterRef.current[index] = element)}
            style={{ display: "inline-block" }}
          >
            {part}
          </span>
        ))}
      </div>
    </div>
  );
}
