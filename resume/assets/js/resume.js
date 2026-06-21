/* Scroll-reveal: add .in to .anim elements as they enter the viewport */
(function () {
  var anims = document.querySelectorAll('.anim');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    anims.forEach(function (el) { io.observe(el); });
  } else {
    anims.forEach(function (el) { el.classList.add('in'); });
  }

  /* "Nerdy version" toggles */
  document.querySelectorAll('[data-nerdy-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.getAttribute('data-nerdy-toggle'));
      if (!target) return;
      var open = target.classList.toggle('open');
      btn.textContent = open ? 'Hide the nerdy version' : btn.getAttribute('data-label') || 'The nerdy version';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();
