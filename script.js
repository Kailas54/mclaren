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

function changeVideo(name) {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.screen-video');
    const models = document.querySelectorAll('.model');

    const carColors = {
        'maclaren-1': '#08de49',    
        'maclaren-2': '#4287f5',    
        'maclaren-3': '#ff0000',   
        'maclaren-4': '#ff8c00',    
        'maclaren-5': '#808080', 
    };

    
    if (carColors[name]) {
        document.documentElement.style.setProperty('--primary-color', carColors[name]);
    }
    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
            }
    }); 

    models.forEach(model => {
        model.classList.remove('active');
        if (model.classList.contains(name)) {
            model.classList.add('active');
            }
    }); 
}