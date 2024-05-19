import style from "@/styles/Nav.module.css";
import Link from "next/link";
import SplitStyle from "./UI/SplitStyle";
import { NAV } from "@/assets/icons";
import TrackButton from "./UI/TrackButton";
import { useGSAP } from "@gsap/react";
import gsap from "@/helpers/GSAP";
import { useRef } from "react";

export default function NavBar({ navState }) {
    const [ isNavOpen, setIsNavOpen ] = navState
    const navHiddenButtonRef = useRef()

    useGSAP(() => {
        gsap.to(navHiddenButtonRef.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(navHiddenButtonRef.current, { scale: 1, duration: .2, ease: "power2.inOut" }) },
                onEnterBack: () => { gsap.to(navHiddenButtonRef.current, { scale: 0, duration: .2, ease: "power2.inOut"  }) }
            }
        })
    })
    
  return (
    <nav className={style.nav}>
      <div>
        <Link href="/" className={style.logo}>
          <SplitStyle text="NDESAIN" />
        </Link>
      </div>
      <div>
        <button className={style.navButton} onClick={() => setIsNavOpen(true)}>
          <NAV />
        </button>
        <div className={style.navHiddenButton} ref={navHiddenButtonRef}>
            <TrackButton onClick={() => setIsNavOpen(true)}>
                <NAV />
            </TrackButton>
        </div>
      </div>
    </nav>
  );
}
