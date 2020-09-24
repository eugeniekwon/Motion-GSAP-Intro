import {gsap} from "gsap";

// console.log(gsap);

var birdSpeed = 3;
var subwaySpeed = 5;

// animation for sun
gsap.from("#sun",{duration:2, alpha:0});
gsap.from("#sun",{duration:10, y:-100, delay:1});

// animation for birds
gsap.from("#bird-1",{duration:birdSpeed, y:300, x:-1000});
gsap.to("#bird-1",{duration:birdSpeed, y:100, x:1000, delay:birdSpeed});
gsap.from("#bird-2",{duration:birdSpeed, y:300, x:-1000, delay:1});
gsap.to("#bird-2",{duration:birdSpeed, y:-200, x:2000, delay:birdSpeed});

// animation for subway
gsap.from("#subway",{duration:subwaySpeed, x:-2000});
gsap.to("#subway",{duration:subwaySpeed, x:2000, delay:subwaySpeed});
