import React, { useRef } from "react";
import style from "@/styles/Footer.module.css";
import Link from "next/link";
import SplitStyle from "./UI/SplitStyle";
import {
  EMAIL,
  FACEBOOK,
  INSTAGRAM,
  LINKEDIN,
  PHONE,
  TWITTER,
} from "@/assets/icons";

export default function Footer() {
  const animateRef = useRef();
  const play = () => animateRef.current.play();
  const reverse = () => animateRef.current.reverse();

  const linkes = [
    { icon: FACEBOOK, link: "https://facebook.com" },
    { icon: INSTAGRAM, link: "https://instagram.com" },
    { icon: TWITTER, link: "https://twitter.com" },
    { icon: LINKEDIN, link: "https://linkedin.com" },
  ];

  return (
    <section className={style.footerContainer}>
      <div className={style.footerTop}>
        <nav className={style.footerTopLink}>
          <Link
            href="/"
            className={style.footerLink}
            onMouseOver={play}
            onMouseOut={reverse}
          >
            <SplitStyle text="NDESAIN" animateRef={animateRef} />
          </Link>
        </nav>
        <div>
          <h4>Opening Hours</h4>
          <p>Week days: 08:00AM - 08:00PM</p>
          <p>Saturday, Sunday: 10:00AM - 06:00PM</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <a href="mailto:ndesain@gmail.com">
              <EMAIL /> ndesain@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:(270) 555-0117">
              <PHONE /> (270) 555-0117
            </a>
          </p>
        </div>
      </div>
      <div className={style.divider}></div>
      <div className={style.footerBottom}>
        <div>
          <p>@2022, All Rights Reserved</p>
        </div>
        <div>
          {linkes.map((link) => (
            <Link href={link.link} key={link.link} className={style.socialLink}>
              <link.icon />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
