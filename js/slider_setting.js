let mobileMode = false;

const mobilWidth = 576;

const resizeHanler = () => {
  console.log(screen.width, mobilWidth);
  if (screen.width <= mobilWidth) {
    if (!sliders.about.status) {
      initSlider(sliders.about.selector);
      sliders.about.status = true;
    }
    if (!sliders.partners.status) {
      initSlider(sliders.partners.selector);
      sliders.partners.status = true;
    }
  }
  if (screen.width > mobilWidth) {
    if (sliders.about.status) {
      removeSlider(sliders.about.selector);
    }
    if (sliders.partners.status) {
      removeSlider(sliders.partners.selector);
    }
  }
};

const sliders = {
  partners: {
    status: false,
    selector: '.block-partners__slider',
  },
  about: {
    status: false,
    selector: '.block-about__slider',
  },
};

window.addEventListener('resize', () => resizeHanler());

function initSlider(selector) {
  $(selector).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
}
const removeSlider = selector => {
  $(selector).slick('unslick');
};

const responsive = [
  {
    breakpoint: 300,
    settings: {
      dots: false,
      infinite: false,
      autoplay: true,
    },
  },
];

$(document).ready(() => {
  resizeHanler();
  $('.block-effect__slider-1').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  });
  $('.block-effect__slider-2').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  });

  setInterval(() => {
    changeSlide();
  }, 2000);
});

const changeSlide = () => {
  $('.block-effect__slider-1').slick('slickNext');
  $('.block-effect__slider-2').slick('slickPrev');
};
