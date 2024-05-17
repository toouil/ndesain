"use client";

import Link from "next/link";
import { SHORT_ARROW } from "@/assets/icons";

export default function Card({ data: { image, title, description, link }, cardType, children }) {
  return (
    <Link
      href={link}
      data-type={cardType}
      className="CARD_UI speaker"
      style={{ "--bg-image": `url(${image})` }}
    >
      <div className="CARD_UI_INFO">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <button href={link} className="CARD_UI_LINK">
        { children }
      </button>
    </Link>
  );
}
