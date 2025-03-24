document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".slider");
    let images = document.querySelectorAll(".slider img");
    let totalWidth = 0;

    images.forEach(img => {
        totalWidth += img.offsetWidth + 30; // Space between images
    });

    slider.style.width = totalWidth + "px";

    function scrollImages() {
        let firstImage = slider.firstElementChild;
        slider.style.transition = "transform 3s linear"; // Slower scrolling
        slider.style.transform = "translateX(-" + (firstImage.offsetWidth + 30) + "px)";

        setTimeout(() => {
            slider.appendChild(firstImage);
            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
        }, 3000); // Matches the transition speed
    }

    setInterval(scrollImages, 4000); // More smooth transition
});
