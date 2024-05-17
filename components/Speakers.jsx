"use client";

import Link from "next/link";
import style from "@/styles/Speakers.module.css";
import { LONG_ARROW, SHORT_ARROW } from "@/assets/icons";
import Card from "./UI/Card";
import { speakers } from "@/content";

export default function Speakers() {
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
