import {gsap} from "gsap";
import {mosquitoAnimation} from "./demo.js";
import {toggleOnAnimation} from "./demo.js";
import {toggleOffAnimation} from "./demo.js";

const mainTL = gsap.timeline();

mainTL.add(mosquitoAnimation())
        .add(toggleOnAnimation())
        // .addPause()
        .add(toggleOffAnimation())
