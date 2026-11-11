const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const dotColor = [161, 168, 179];
const crestColor = [110, 168, 254];
const frameInterval = 1000 / 30;

const smoothstep = (from, to, value) => {
  const amount = Math.min(1, Math.max(0, (value - from) / (to - from)));
  return amount * amount * (3 - 2 * amount);
};

function createWave(canvas) {
  const context = canvas.getContext('2d');
  const keepsCopyClear = canvas.dataset.fade === 'copy';

  let width = 0;
  let height = 0;
  let dots = [];
  let frameId = null;
  let lastFrame = 0;
  let onScreen = true;

  // Dots fade out at the top and bottom edges and stay faint behind text.
  function visibility(x, y) {
    const edges = smoothstep(0, height * 0.18, y) * (1 - smoothstep(height * 0.78, height, y));
    if (width < 720) return edges * 0.55;
    if (!keepsCopyClear) return edges * 0.45;
    return edges * (0.32 + 0.68 * smoothstep(width * 0.3, width * 0.62, x));
  }

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const spacing = width < 720 ? 30 : 24;
    dots = [];
    for (let y = spacing / 2; y < height; y += spacing) {
      for (let x = spacing / 2; x < width; x += spacing) {
        dots.push({ x, y, visibility: visibility(x, y) });
      }
    }
  }

  function draw(time) {
    context.clearRect(0, 0, width, height);
    for (const dot of dots) {
      if (dot.visibility < 0.01) continue;
      const swell =
        Math.sin(dot.x * 0.011 + time * 0.00045) +
        0.6 * Math.sin((dot.x + dot.y) * 0.007 - time * 0.0003) +
        0.4 * Math.sin(dot.y * 0.02 + time * 0.00035);
      const level = smoothstep(0.2, 0.8, (swell + 2) / 4);
      const crest = smoothstep(0.5, 1, level);
      const [r, g, b] = dotColor.map((channel, index) => Math.round(channel + (crestColor[index] - channel) * crest));
      const size = 1.2 + level * 1.4;

      context.fillStyle = `rgba(${r}, ${g}, ${b}, ${(0.1 + level * 0.65) * dot.visibility})`;
      context.fillRect(dot.x - size / 2, dot.y - size / 2 - level * 9, size, size);
    }
  }

  function loop(time) {
    frameId = requestAnimationFrame(loop);
    if (time - lastFrame < frameInterval) return;
    lastFrame = time;
    draw(time);
  }

  function update() {
    const shouldRun = onScreen && !document.hidden && !reducedMotion.matches;
    if (shouldRun && frameId === null) {
      frameId = requestAnimationFrame(loop);
    } else if (!shouldRun && frameId !== null) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
  }

  function redraw() {
    resize();
    draw(performance.now());
  }

  new ResizeObserver(redraw).observe(canvas);
  new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    update();
  }).observe(canvas);
  document.addEventListener('visibilitychange', update);
  reducedMotion.addEventListener('change', update);

  redraw();
  update();
}

document.querySelectorAll('.dot-waves').forEach(createWave);
