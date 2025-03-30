document.getElementById("startScroll").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        if (!window.isScrolling) {
          window.scrollSpeed = 1;
          window.isScrolling = true;
          document.documentElement.style.scrollBehavior = "auto";

          function smoothScroll() {
            if (!window.isScrolling) return;
            window.scrollBy(0, window.scrollSpeed);
            requestAnimationFrame(smoothScroll);
          }

          requestAnimationFrame(smoothScroll);

          document.addEventListener('click', ()=> {
            window.isScrolling = false;
          });
        }
      }
    });
  });
});

document.getElementById("stopScroll").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        window.isScrolling = false;
      }
    });
  });
});

document.getElementById("increaseSpeed").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        if (typeof window.scrollSpeed === "undefined") window.scrollSpeed = 1;
        window.scrollSpeed += 1; // Gradually increase speed
      }
    });
  });
});



document.getElementById("decreaseSpeed").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => {
        if (typeof window.scrollSpeed === "undefined") window.scrollSpeed = 1;
        window.scrollSpeed = Math.max(1, window.scrollSpeed - 1); // Prevent negative speed

        // if you want reverse on decrease speed
        // window.scrollSpeed = window.scrollSpeed - 1;
      }
    });
  });
});

