"use client";

import Link from "next/link";
import style from "@/styles/Speakers.module.css";
import { LONG_ARROW, SHORT_ARROW } from "@/assets/icons";
import Card from "./UI/Card";
import { speakers } from "@/content";
import gsap from "@/helpers/GSAP";
import { useGSAP } from "@gsap/react";

export default function Speakers() {
  useGSAP(() => {
    gsap.from("." + style.main, {
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: "." + style.main,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    });
  });

  return (
    <section className={style.speakersContainer}>
      <div className={style.body}>
        <div className={style.main}>
          <h1>Meet Our Best Speakers</h1>
          <Link href="/speakers" className={style.meetSpeakers}>
            See All <LONG_ARROW deg={-45} />
          </Link>
        </div>

        {speakers.map((speaker, index) => (
          <div className={style.speaker} key={index}>
            <Card data={speaker} cardType="speaker">
              <SHORT_ARROW deg={-45} />
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
