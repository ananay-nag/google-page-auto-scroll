if (!window.scrollHandler) {
  window.scrollSpeed = 1; // Start with a lower speed for smoothness
  window.isScrolling = false;

  // Smooth scrolling function using requestAnimationFrame
  function smoothScroll() {
      if (!window.isScrolling) return;
      window.scrollBy(0, window.scrollSpeed);
      requestAnimationFrame(smoothScroll);
  }

  // Start scrolling
  window.startScroll = function () {
      if (!window.isScrolling) {
          window.isScrolling = true;
          requestAnimationFrame(smoothScroll);
      }
  };

  // Stop scrolling
  window.stopScroll = function () {
      window.isScrolling = false;
  };

  // Increase speed gradually
  window.increaseSpeed = function () {
      window.scrollSpeed += 1; // Increase speed gradually (lower step for smoothness)
  };

  // Decrease speed gradually (prevent negative speed)
  window.decreaseSpeed = function () {
      window.scrollSpeed = Math.max(1, window.scrollSpeed - 1);

      // if you want reverse on decrease speed
      // window.scrollSpeed = window.scrollSpeed - 1;
  };

  window.scrollHandler = true;
}
