const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function (slide, index) {
  if (index !== 0) slide.classList.add('hidden');

  slide.dataset.index = index; 
  sliderItems[0].setAttribute('data-active', '');

  slide.addEventListener('click', function() {
    slide.classList.add('hidden');
    slide.removeAttribute('data-active');

    let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
  })
});

btnNext.onclick = function () {
  console.log('Next Slide');
}