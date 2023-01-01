import colors from "@/constants/colors";
import WebBrowser from "expo-web-browser";
import alert from "@/utils/alert-message";
/**
 * open web browser with url
 * @param url https://themanan.me
 */
const handleUrl = async (url: string) => {
  await WebBrowser.openBrowserAsync(url, {
    showTitle: true,
    toolbarColor: colors.app_color_primary,
    readerMode: false
  }).catch((e: Error) => alert(e.name, e.message));
};

export default handleUrl;
