function cambiarImagenesCarousel() {
  const imgsCarousel = document.querySelectorAll('.carousel-item img');

  if (window.innerWidth <= 768) {
    imgsCarousel[0].src = 'img/CarouselHome/mobile/slide1.jpg';
    imgsCarousel[1].src = 'img/CarouselHome/mobile/slide2.jpg';
    imgsCarousel[2].src = 'img/CarouselHome/mobile/slide3.jpg';
  } else {
    imgsCarousel[0].src = 'img/CarouselHome/pc/slide1.jpg';
    imgsCarousel[1].src = 'img/CarouselHome/pc/slide2.jpg';
    imgsCarousel[2].src = 'img/CarouselHome/pc/slide3.jpg';
  }
}

window.addEventListener('load', cambiarImagenesCarousel);
window.addEventListener('resize', cambiarImagenesCarousel);