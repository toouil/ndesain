"use client";

import React, { useState } from "react";
import style from "@/styles/Contact.module.css";
import Slider from "./UI/Slider";
import gsap from "@/helpers/GSAP";
import { useGSAP } from "@gsap/react";

const slides = [
  "DESIGN",
  "PRODUCT",
  "STARTUP",
  "STUDIO",
  "BUILD",
  "EVENT",
  "DESIGN",
  "PRODUCT",
  "STARTUP",
  "STUDIO",
  "BUILD",
  "EVENT",
];

export default function Contact() {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    const userDataCopy = { ...userData };
    userDataCopy[event.target.name] = event.target.value;
    setUserData(userDataCopy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Name : " + userData.name + "\n" + "Email : " + userData.email);
  };

  const renderSlides = slides.map((slide, index) => (
    <div className={style.slide} key={slide + " " + index}>
      {slide}
    </div>
  ));

  useGSAP(() => {
    gsap.from("." + style.contactContainer + " ." + style.topRightContact, {
      x: 200,
      scrollTrigger: {
        trigger: "." + style.contactContainer,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
  });

  return (
    <section className={style.contactContainer}>
      <div className={style.innerContactContainer}>
        <div className={style.topContact}>
          <div className={style.topLeftContact}>
            <h1>Want To Get Info On The Next Event ?</h1>
          </div>
          <div className={style.topRightContact}>
            <form onSubmit={handleSubmit}>
              <div className={style.inputGroup}>
                <label htmlFor="contactName">Name</label>
                <input
                  type="text"
                  name="name"
                  autoComplete="email"
                  required
                  id="contactName"
                  onChange={handleChange}
                />
              </div>
              <div className={style.inputGroup}>
                <label htmlFor="contactEmail">Email</label>
                <input
                  type="text"
                  name="email"
                  autoComplete="email"
                  required
                  id="contactEmail"
                  onChange={handleChange}
                />
              </div>
              <div className={style.inputGroup}>
                <input type="submit" value="Submit" name="submit" />
              </div>
            </form>
          </div>
        </div>
        <div className={style.bottomContact}>
          <Slider direction={-1}>{renderSlides}</Slider>
          <Slider direction={1}>{renderSlides}</Slider>
          <Slider direction={-1}>{renderSlides}</Slider>
        </div>
      </div>
    </section>
  );
}
