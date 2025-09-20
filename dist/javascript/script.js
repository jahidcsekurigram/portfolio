// Typing Text Js
$(document).on('DOMContentLoaded', function () {
  window.ityped.init(document.querySelector('.ityped'), {
    strings: [
      'I’m Engr. Md. Jahid Hasan',
      'Computer Science and Engineering',
      'Rajshahi Science and Technology University (RSTU)',
    ],
    loop: true,
  });
});
/*------------------------------------- Whole Page Scrolling Animation -------------------------------------*/
const observer = new IntersectionObserver(entries => {
  entries.forEach(({ isIntersecting, target }) => {
    target.classList.toggle('show', isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll(
  '.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down'
);

document.addEventListener('DOMContentLoaded', () => {
  hiddenElements.forEach(el => observer.observe(el));
});

/*------------------------------------- Menu Toggle -------------------------------------*/
$(document).ready(function () {
  const $menuToggle = $('#menu-toggle');
  const $sideMenu = $('.side-menu-main');
  const $hamburger = $('.hamburger');

  $(document).on('click', '.menu-list-main li', function (e) {
    e.preventDefault();

    const $link = $(this).find('a');
    const targetId = $link.attr('href')
      ? $link.attr('href').substring(1)
      : null;

    if (targetId && $('#' + targetId).length) {
      $('#' + targetId)[0].scrollIntoView({ behavior: 'smooth' });
    }

    $sideMenu.removeClass('show');
    $hamburger.removeClass('is-active');
  });

  $menuToggle.on('click', function () {
    $sideMenu.toggleClass('show');
    $hamburger.toggleClass('is-active', $sideMenu.hasClass('show'));
  });

  new MutationObserver(() => {
    if (!$sideMenu.hasClass('show')) {
      $hamburger.removeClass('is-active');
    }
  }).observe($sideMenu[0], { attributes: true, attributeFilter: ['class'] });
});

/*------------------------------------- Testimonial Slider -------------------------------------*/
$(document).ready(function () {
  $('.testimonial').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 1000,
  });
});

/*------------------------------------- Bottom To Top Button -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.bottom-top-button');
  window.addEventListener('scroll', () => {
    button.style.display = window.pageYOffset > 100 ? 'block' : 'none';
  });
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
