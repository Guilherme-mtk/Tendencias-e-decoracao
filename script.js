class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li',
);
mobileNavbar.init();

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
