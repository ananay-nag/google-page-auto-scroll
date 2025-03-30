chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "parentMenu",
    title: "Auto Scroll",
    contexts: ["page"],
  });

  chrome.contextMenus.create({
    id: "increaseSpeed",
    title: "➕",
    parentId: "parentMenu",
    contexts: ["page"],
  });

  chrome.contextMenus.create({
    id: "playScroll",
    title: "▶️",
    parentId: "parentMenu",
    contexts: ["page"],
  });

  chrome.contextMenus.create({
    id: "stopScroll",
    title: "⏸️",
    parentId: "parentMenu",
    contexts: ["page"],
  });

  chrome.contextMenus.create({
    id: "decreaseSpeed",
    title: "➖",
    parentId: "parentMenu",
    contexts: ["page"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  let commandMap = {
    increaseSpeed: () => {
      window.increaseSpeed();
    },
    decreaseSpeed: () => {
      window.decreaseSpeed();
    },
    stopScroll: () => {
      window.stopScroll();
    },
    playScroll: () => {
      window.startScroll();
    },
  };

  if (commandMap[info.menuItemId]) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: commandMap[info.menuItemId],
    });
  }
});
