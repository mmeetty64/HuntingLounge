class Slider {
    constructor(sliderId) {
      this.slider = document.getElementById(sliderId);
      this.slides = this.slider.querySelectorAll('.slides img');
      this.prev = this.slider.querySelector('.prev');
      this.next = this.slider.querySelector('.next');
      this.dotsContainer = this.slider.querySelector('.dots');
      this.index = 0;
      this.interval = null;
  
      this.createDots();
      this.showSlide(this.index);
      this.addEventListeners();
      this.startAutoSlide();
    }
  
    createDots() {
      this.slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.index = i;
        this.dotsContainer.appendChild(dot);
      });
      this.dots = this.dotsContainer.querySelectorAll('.dot');
    }
  
    showSlide(n) {
      if (n >= this.slides.length) this.index = 0;
      if (n < 0) this.index = this.slides.length - 1;
      this.slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-this.index * 100}%)`;
      });
      this.dots.forEach(dot => {
        dot.classList.remove('active');
        if (parseInt(dot.dataset.index) === this.index) dot.classList.add('active');
      });
    }
  
    addEventListeners() {
      this.prev.addEventListener('click', () => {
        this.index--;
        this.showSlide(this.index);
        this.resetAutoSlide();
      });
  
      this.next.addEventListener('click', () => {
        this.index++;
        this.showSlide(this.index);
        this.resetAutoSlide();
      });
  
      this.dots.forEach(dot => {
        dot.addEventListener('click', () => {
          this.index = parseInt(dot.dataset.index);
          this.showSlide(this.index);
          this.resetAutoSlide();
        });
      });
    }
  
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.index++;
        this.showSlide(this.index);
      }, 5000);
    }
  
    resetAutoSlide() {
      clearInterval(this.interval);
      this.startAutoSlide();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new Slider('slider1');
    new Slider('slider2');
  });
  