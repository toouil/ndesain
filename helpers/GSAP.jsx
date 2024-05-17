import {gsap as GS} from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const gsap = GS
gsap.registerPlugin(ScrollTrigger, useGSAP)

export default gsap