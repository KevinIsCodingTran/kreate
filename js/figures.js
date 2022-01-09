const productImages = document.querySelectorAll(".figures-images img");
const productImageSlide = document.querySelector(".image-slider-f");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
  item.addEventListener('click', () => {
    productImages[activeImageSlide].classList.remove('active');
    item.classList.add('active');
    productImageSlide.style.backgroundImage = `url('${item.src}')`;
    activeImageSlide = i;
  })
})
