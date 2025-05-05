const ticker = document.getElementById("ticker");
let position = 0;
let speed = 0.8;
let requestId;

function animate() {
  position -= speed;
  ticker.style.transform = `translateX(${position}px)`;
  if (position < -ticker.offsetWidth / 2) {
    position = 0;
  }
  requestId = requestAnimationFrame(animate);
}

animate();

document.querySelector(".ticker-wrapper").addEventListener("mouseenter", () => {
  speed = 0.3;
});
document.querySelector(".ticker-wrapper").addEventListener("mouseleave", () => {
  speed = 1;
});
