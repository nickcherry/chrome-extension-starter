/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import React from 'react';
import { createRoot } from 'react-dom/client';
import { sendMessageToCurrentTab } from 'scripts/utils/chrome/sendMessageToCurrentTab';

const Popup = () => {
  const sendMessageToContentScript = async () => {
    const response = await sendMessageToCurrentTab<string, string>({
      message: 'hi',
    });
    console.log('Popup received message from content script:', response);
  };

  return (
    <button onClick={sendMessageToContentScript}>
      Send message to content script
    </button>
  );
};

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
);
