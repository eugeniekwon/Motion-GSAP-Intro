
import {gsap} from "gsap";  
import {circleSpeed} from "animationSpeed";  

export function purpleCircleTimeline(){ 
    
    var timeline = gsap.timeline();

    timeline.to("#purple-circle", {duration:circleSpeed, y:300})
            .to("#purple-circle", {duration:circleSpeed, x:300});
    return timeline;
    
}