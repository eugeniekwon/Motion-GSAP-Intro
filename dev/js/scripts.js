// import * as Demo from './demo.js';
import {gsap} from "gsap";  

import {redCircleTimeline} from './redCircle.js';
import {yellowCircleTimeline} from './yellowCircle.js';
import {purpleCircleTimeline} from './purpleCircle.js';

// quiet codekit 
// console.log(redCircleTimeline);   


var mainTL = gsap.timeline({paused:true});

mainTL.add(redCircleTimeline())
      .add(yellowCircleTimeline())
    //   .addLabel("purple")
      .add(purpleCircleTimeline())
    //   .seek("purple")
      // .addPause()
      .play();