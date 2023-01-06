import { Alert } from "react-native";

/** In-App Alert message */
const alert = (title: string, message: string | any) => {
  if (typeof message !== "string") {
    Alert.alert(title, JSON.stringify(message), [
      {
        text: "OK",
        onPress: () => null,
        style: "default"
      }
    ]);
    return;
  }
  Alert.alert(title, message, [
    {
      text: "OK",
      onPress: () => null,
      style: "default"
    }
  ]);

  return;
};

export default alert;
