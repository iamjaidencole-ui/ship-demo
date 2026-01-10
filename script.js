function openMenu() {
  document.getElementById('mobileNav').classList.add('open');
  document.getElementById('overlay').classList.add('show');
}

function closeMenu() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

function toggleFaq(item) {
  item.querySelector('.faq-content').classList.toggle('show');
}

window.onscroll = () => {
  document.getElementById('topBtn').style.display =
    window.scrollY > 300 ? 'block' : 'none';
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
