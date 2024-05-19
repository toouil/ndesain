import style from "@/styles/NavMenu.module.css";
import TrackButton from "./UI/TrackButton";
import { XMARK } from "@/assets/icons";
import { useEffect, useRef } from "react";
import Link from "next/link";
import SplitStyle from "./UI/SplitStyle";
import { useGSAP } from "@gsap/react";
import gsap from "@/helpers/GSAP";
import { socialLinks } from "@/content";

export default function NavMenu({ navState }) {
  const animateNavRef = useRef()
  const [isNavOpen, setIsNavOpen] = navState;

  const menu = [
    { slug: "HOME", path: "/" },
    { slug: "ABOUT", path: "/" },
    { slug: "SERVICES", path: "/" },
    { slug: "CONTACT", path: "/" },
  ];

  useGSAP(() => {
    animateNavRef.current = gsap.timeline()
    .from("." + style.headerBackground, { scaleY: 0, duration: .7 })
    .from("." + style.navClose, { scale: 0, duration: .3 })
    .from("." + style.menuLink, { y: "100%", stagger: .15 })
    .from("." + style.socialLink, { opacity: 0, duration: .5 })
    .pause()
  })

  useEffect(() => {
    if (isNavOpen) {
      animateNavRef.current.play()
    }
    else {
      animateNavRef.current.reverse()
    }
  }, [isNavOpen]);

  return (
    <header className={style.header} style={{ pointerEvents: isNavOpen? "all" : "none" }}>
      <div className={style.headerBackground}></div>
      <div className={style.navCloseContainer}>
        <div className={style.navClose}>
          <TrackButton className={style.navCloseButton} onClick={() => setIsNavOpen(false)}>
            <XMARK />
          </TrackButton>
        </div>
      </div>

      <div className={style.navMenuContainer}>
        <ul style={{ listStyle: "none" }}>
          {menu.map((menuItem) => (
            <li key={menuItem.slug}>
              <Link href={menuItem.path} className={style.menuLink}>
                <SplitStyle text={menuItem.slug} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.navMenuSocialContainer}>
          <ul style={{ listStyle: "none" }}>
            {socialLinks.map((socialLink) => (
              <li key={socialLink.slug}>
                <Link href={socialLink.link} className={style.socialLink}>
                  {socialLink.slug}
                </Link>
              </li>
            ))}
          </ul>
      </div>
    </header>
  );
}
