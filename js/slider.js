const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);

sliderItems.forEach(function (slide, index) {

  if (index !== 0) slide.classList.add('hidden');

  slide.dataset.index = index;

  slide.addEventListener('click', function() {
    slide.classList.add('hidden');

    let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    nextSlide.classList.remove('hidden');

  });
});