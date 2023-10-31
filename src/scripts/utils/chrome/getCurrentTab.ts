import { isTabWithId, TabWithId } from 'scripts/types/chrome';

function getCurrentTab() {
  return new Promise<TabWithId>((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (isTabWithId(tabs[0])) {
        resolve(tabs[0]);
      } else {
        reject(new Error('Could not find active tab'));
      }
    });
  });
}

export { getCurrentTab };
