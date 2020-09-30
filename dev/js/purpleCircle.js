
import {gsap} from "gsap";  
import {circleSpeed} from "animationSpeed";  

export function purpleCircleTimeline(){ 
    
    var timeline = gsap.timeline();

    timeline.from("#purple-circle", {duration:circleSpeed, x:600, y:300, alpha:0})
            .to("#purple-circle", {duration:circleSpeed, x:300, scale:40, borderRadius:0});
    return timeline;
    
}