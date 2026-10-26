(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  var nav = document.getElementById('nav');
  var sticky = document.querySelector('.sticky-cta');
  var hero = document.querySelector('.hero');

  // Nav background + mobile sticky CTA
  function onScroll(){
    var y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    if (sticky && hero) sticky.classList.toggle('is-visible', y > hero.offsetHeight * 0.7);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  if (reduce || !('IntersectionObserver' in window)) return;

  // Scroll reveal (only hide elements when JS + motion are available)
  root.classList.add('js');
  var groups = new Map();
  document.querySelectorAll('.reveal').forEach(function(el){
    var p = el.parentElement, i = groups.get(p) || 0;
    el.style.setProperty('--d', (Math.min(i, 6) * 0.08) + 's');
    groups.set(p, i + 1);
  });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // Subtle hero parallax
  var media = document.querySelector('.hero__media');
  if (media){
    var ticking = false;
    window.addEventListener('scroll', function(){
      if (ticking) return; ticking = true;
      requestAnimationFrame(function(){
        var y = window.scrollY;
        if (y < window.innerHeight) media.style.transform = 'translate3d(0,' + (y * 0.25) + 'px,0)';
        ticking = false;
      });
    }, {passive:true});
  }
})();
