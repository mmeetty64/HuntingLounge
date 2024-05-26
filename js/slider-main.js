function createSlider(sliderId) {
    let currentIndex = 0;
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides_main');
    const totalSlides = slides.children.length;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextSlide, 5000);
}

createSlider('slider1');
createSlider('slider2');
createSlider('slider3');