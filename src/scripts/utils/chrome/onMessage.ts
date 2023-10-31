import { OnMessageHandler } from 'scripts/types/chrome';

async function onMessage<Message, Response>(
  handler: OnMessageHandler<Message, Response>,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chrome.runtime.onMessage.addListener(handler as any);
}

export { onMessage };
