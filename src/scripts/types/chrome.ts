// https://developer.chrome.com/docs/extensions/reference/runtime/#type-MessageSender
export type MessageSender = {
  documentId?: string;
  documentLifecycle?: string;
  frameId?: number;
  id?: string;
  nativeApplication?: string;
  origin?: string;
  tab?: chrome.tabs.Tab;
  tlsChannelId?: string;
  url?: string;
};

// https://developer.chrome.com/docs/extensions/reference/runtime/
export type SendResponse<Response> = (message: Response) => void;

export type OnMessageHandler<Message, Response = void> = (
  message: Message,
  sender: MessageSender,
  sendResponse: SendResponse<Response>,
) => boolean | undefined | void;

export type TabWithId = chrome.tabs.Tab & { id: number };

export function isTabWithId(maybeTab: unknown): maybeTab is TabWithId {
  return !!(maybeTab && (maybeTab as TabWithId).id);
}
