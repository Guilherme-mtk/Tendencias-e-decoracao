const linkScroll = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);


const topp = section.offsetTop;
window.scrollTo({
  top: topp,
  behavior:'smooth',
});
}

linkScroll.forEach(link => {
  link.addEventListener('click', scrollToSection);
});


