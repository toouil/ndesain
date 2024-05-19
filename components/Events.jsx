"use client";

import { LONG_ARROW } from "@/assets/icons";
import { useGSAP } from "@gsap/react";
import gsap from "@/helpers/GSAP";
import Card from "./UI/Card";
import style from "@/styles/Events.module.css";
import { events } from "@/content";

export default function Events() {
  const renderEvents = events.map((event) => (
    <div className={style.cardParent} key={event.title}>
      <Card data={event} cardType="event">
        <LONG_ARROW deg={45} />
      </Card>
    </div>
  ));

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${style.top}`,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      })
      .fromTo(`.${style.top}`, { y: 70 }, { y: -70 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${style.cardParent}`,
          start: "top center",
        },
      })
      .from(`.${style.cardParent}`, { opacity: 0, x: 200, stagger: 0.2 })
      .from(`.${style.topButton}`, { opacity: 0, scale: 0.3 }, "<");
  });

  return (
    <section className={style.eventsContainer}>
      <header className={style.top}>
        <h1>Agenda For Upcoming events</h1>
        <br />
        <p>Every week there will be an interesting event for you to follow</p>
      </header>

      <main className={style.body}>
        <div className={style.topButton}>
          <LONG_ARROW deg={135} />
        </div>
        {renderEvents}
      </main>
    </section>
  );
}
