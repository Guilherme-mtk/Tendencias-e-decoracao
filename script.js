function scrollSuave() {
  const linkScroll = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    const topp = section.offsetTop;
    window.scrollTo({
      top: topp,
      behavior: 'smooth',
    });
  }

  linkScroll.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

scrollSuave();

function slide() {
  let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll('#slider img');
  max = images.length;

  function nextImage() {
    images[currentImageIndex].classList.remove('selected');

    currentImageIndex++;

    if (currentImageIndex >= max) currentImageIndex = 0;

    images[currentImageIndex].classList.add('selected');
  }

  function start() {
    setInterval(() => {
      nextImage();
    }, time);
  }

  window.addEventListener('load', start);
}

slide();
