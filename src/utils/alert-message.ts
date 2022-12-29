import { Alert } from "react-native";

/** In-App Alert message */
const alert = (title: string, message: string) => {
  Alert.alert(title, message, [
    {
      text: "OK",
      onPress: () => null,
      style: "default"
    }
  ]);

  return true;
};

export default alert;
