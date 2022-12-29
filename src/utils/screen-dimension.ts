import { Dimensions } from "react-native";

// This is % of screen height
const hp = (height: number) => {
  const screenHeight = Dimensions.get("window").height;
  return (height * screenHeight) / 100;
};

// This is % of screen width
const wp = (width: number) => {
  const screenWidth = Dimensions.get("window").width;
  return (width * screenWidth) / 100;
};

export { hp, wp };
