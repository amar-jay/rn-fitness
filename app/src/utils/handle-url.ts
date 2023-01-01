import * as WebBrowser from "expo-web-browser";
/**
 * open web browser with url
 * @param url https://themanan.me
 */
const handleUrl = async (url: string) => {
  return WebBrowser.openBrowserAsync(url);
};

export default handleUrl;
