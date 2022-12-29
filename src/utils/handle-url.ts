import WebBrowser from "expo-web-browser";
/**
 * open web browser with url
 * @param url https://themanan.me
 */
const handleUrl = async (url: string) => {
  let res = await WebBrowser.openBrowserAsync(url);

  return res;
};

export default handleUrl;
