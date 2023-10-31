import { onMessage } from 'scripts/utils/chrome/onMessage';

onMessage<string, string>((message, _sender, sendResponse) => {
  console.log('Content script received message from popup:', message);
  sendResponse(message.toUpperCase() + '!!!');

  return false;
});
