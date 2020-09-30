
import {gsap} from "gsap";  
import {circleSpeed} from "animationSpeed";  

export function yellowCircleTimeline(){ 
    
    var timeline = gsap.timeline();

    timeline.from("#yellow-circle", {duration:circleSpeed, y:500, alpha:0})
            .to("#yellow-circle", {duration:circleSpeed, x:300});
    return timeline;
    
}