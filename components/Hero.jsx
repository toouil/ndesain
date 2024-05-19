"use client";

import Link from "next/link";
import { SHORT_ARROW, NAV } from "@/assets/icons";
import TrackButton from "./UI/TrackButton";
import SplitStyle from "./UI/SplitStyle";
import style from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={style.heroContainer}>
      <div className={style.hero}>
        <main className={style.heroBody}>
          <p>1 MAY 2024</p>
          <h1>THE CONFERENCE FOR PRODUCT DESINGER</h1>
        </main>

        <footer className={style.footer}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum non,
            quas adipisci voluptas quod esse quia aut soluta porro distinctio
            exercitationem ipsa, officiis amet dolore tempore velit nihil
            facilis corrupti!
          </p>

          <TrackButton
            href="/explore-more"
            className={style.explore}
            childProps={{ className: style.exploreInner }}
          >
            <span>
              <SHORT_ARROW deg={-45} />
            </span>
            <span>Explore More</span>
          </TrackButton>
        </footer>
      </div>
    </section>
  );
}
