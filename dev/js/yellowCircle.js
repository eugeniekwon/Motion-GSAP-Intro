
import {gsap} from "gsap";  

export function yellowCircleTimeline(){ 
    
    var timeline = gsap.timeline();

    var circleSpeed = 2;

    timeline.to("#yellow-circle", {duration:circleSpeed, y:300})
            .to("#yellow-circle", {duration:circleSpeed, x:300});
    return timeline;
    
}