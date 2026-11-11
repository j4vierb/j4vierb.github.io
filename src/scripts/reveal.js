// Only content still below the fold is hidden, so the page stays readable if this script fails.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );

  document.querySelectorAll('.reveal').forEach((element) => {
    if (element.getBoundingClientRect().top <= window.innerHeight) return;
    element.classList.add('reveal-pending');
    observer.observe(element);
  });
}
