import { getCurrentTab } from './getCurrentTab';
import { sendMessageToTab } from './sendMessageToTab';

async function sendMessageToCurrentTab<Message, Response = void>({
  message,
}: {
  message: Message;
}) {
  const tab = await getCurrentTab();

  return sendMessageToTab<Message, Response>({ message, tabId: tab.id });
}

export { sendMessageToCurrentTab };
