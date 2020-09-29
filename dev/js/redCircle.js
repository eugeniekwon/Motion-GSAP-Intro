
import {gsap} from "gsap";  
import {circleSpeed} from "animationSpeed";  

export function redCircleTimeline(){ 
    
    var timeline = gsap.timeline();

    timeline.to("#red-circle", {duration:circleSpeed, y:300})
            .to("#red-circle", {duration:circleSpeed, x:300});
    return timeline;
    
}