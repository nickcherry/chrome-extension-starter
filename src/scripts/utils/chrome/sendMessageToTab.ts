function sendMessageToTab<Message, Response>({
  message,
  tabId,
}: {
  message: Message;
  tabId: number;
}): Promise<Response> {
  return chrome.tabs.sendMessage(tabId, message);
}

export { sendMessageToTab };
