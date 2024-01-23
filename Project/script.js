let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    //console.log(rect.getBoundingClientRect()) //getBoundingClientRect--> location kalati aplyalala
    let rectangleLocation = rect.getBoundingClientRect();
    let insideRectval = details.clientX - rectangleLocation.left;
    if (insideRectval < rectangleLocation.width / 2) {
        // const gsap = document.getElementById('gsap')
       let redcolor =  gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, 250 , insideRectval);
       gsap.to(rect,{
        backgroundcolor:`rgb(${redcolor}, 0, 0)`,
        ease: Power4
       })
    }else{
        console.log("right");
    }
},false);

console.log("hello")