

const backgroundVideo = document.getElementById("vid");
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".content", 
  start: "top top",   
  endTrigger: "main",   
  end: "bottom top",    
  onUpdate: self => {
   
    const blurAmount = (self.progress * 10).toFixed(1); 
    backgroundVideo.style.filter = `blur(${blurAmount}px)`;
  },
});



document.addEventListener("DOMContentLoaded", function() {
  const mainHeading = document.querySelector(".inner_text1");
  const mainHeadingText = mainHeading.textContent;
  mainHeading.textContent = "";
  for (const letter of mainHeadingText) {
    const letterSpan = document.createElement("span");
    letterSpan.textContent = letter;
    mainHeading.appendChild(letterSpan);
  }
  gsap.fromTo(
    mainHeading.querySelectorAll("span"),
    {
      opacity: 0,
      x: "-100%", 
    },
    {
      opacity: 1,
      x: 0,
      stagger: 0.1, 
      duration: 1,  
      
    }
  );
});




gsap.registerPlugin(ScrollTrigger);

gsap.to(".part2 .pic .pic1", {
  scrollTrigger: {
    trigger: ".part2",
    scroller: "body",
    scrub: 3,
    // markers: true,
    start: "top 90%", // Corrected from "Start"
  },
  scale: 0.8,
});
