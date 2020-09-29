
import {gsap} from "gsap";  
import {circleSpeed} from "animationSpeed";  

export function yellowCircleTimeline(){ 
    
    var timeline = gsap.timeline();

    timeline.to("#yellow-circle", {duration:circleSpeed, y:300})
            .to("#yellow-circle", {duration:circleSpeed, x:300});
    return timeline;
    
}