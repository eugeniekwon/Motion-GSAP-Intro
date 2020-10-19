import {gsap} from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";  

gsap.registerPlugin(MotionPathPlugin);




//mosquito (night)
const mosquitoTL = gsap.timeline();
gsap.set("#mosquito", {xPercent:-50, yPercent:-50, transformOrigin: "50% 50%"})

mosquitoTL.to("#mosquito", {duration:3, motionPath:"#mosquito-path", autoRotate:true})
        .from("#mosquito", {duration:1.5, scale: 0.3, ease:"none"})
        //  .from("#mosquito", {duration:3, x:-10, y:10, rotation:360, ease:"none"})
        //  .to("#mosquito", {duration:3, x:100, y:200}, "-=3")

export function mosquitoAnimation(){
    return mosquitoTL;
}


//toggle (On)
const toggleOnTL = gsap.timeline();
toggleOnTL.to("#circle-toggle", {duration:1.5, x:185})
        .to("#circle-toggle", {duration:1, fill:"#ffffff"}, "on")
        .to("#content", {duration:1, backgroundColor:"#ffffff"}, "on")
        .from("#sun-and-moon", {duration:1.5, alpha:0, rotation:10}, "-=0.5")
        .from("#person", {duration:1.5, alpha:0, yPercent:-10}, "-=0.5")
        
export function toggleOnAnimation(){
    return toggleOnTL;
}


//toggle (off)
const toggleOffTL = gsap.timeline();
toggleOffTL.to("#person", {duration:1, alpha:0})
            .to("#sun-and-moon", {duration:1, alpha:0}, "-=0.5")
            .to("#circle-toggle", {duration:1.5, x:0})
             .to("#circle-toggle", {duration:1, fill:"#272424"}, "off")
             .to("#content", {duration:1, backgroundColor:"#000000"}, "off")
             .to("#mosquito", {duration:1, x: 700, y:-100, alpha:0})
        
export function toggleOffAnimation(){
    return toggleOffTL;
}


