const getCurrentTab = async () => {
  const queryOptions = { active: true, currentWindow: true }; // Ensure only active tab in current window
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};

const injectContentScript = (tab) => {
  if (!tab || !tab.id) {
    console.error("No valid tab provided");
    return;
  }

  const { id, url } = tab;

  chrome.scripting.executeScript(
    {
      target: { tabId: id, allFrames: true },
      files: ['cs.js'],
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error(`Failed to execute script: ${chrome.runtime.lastError.message}`);
      } else {
        console.log(`Injected content script into: ${url}`);
      }
    }
  );
};

// Usage
getCurrentTab()
  .then((tab) => {
    injectContentScript(tab);
  })
  .catch((error) => {
    console.error("Error fetching the current tab:", error);
  });
