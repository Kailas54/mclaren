function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    

}
document.querySelectorAll(".trailer").forEach(video => {
    video.addEventListener("mouseenter", function () {
        this.play();
    });

    video.addEventListener("mouseleave", function () {
        this.pause();
        this.currentTime = 0; // Reset video to start when unhovered
    });
});