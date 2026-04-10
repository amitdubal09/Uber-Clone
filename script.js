let pickupBtn = document.querySelector(".pickup-btn");
let hover = document.querySelector("#pickup-box");
pickupBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    hover.style.display = "flex";
    gsap.from(hover, {
        y: -30,
        opacity: 0,
        duration:0.2
    })
})
window.addEventListener("click", () => {
    hover.style.display = "none";
})