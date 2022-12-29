import React from "react";
import { Platform, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import colors from "../constants/colors";
import { wp, hp } from "@/utils/screen-dimension";
interface Props {
  textName: string;
  onClick: () => void;
  buttonWidth: number;
  buttonHeight?: number;
  bgColor?: string;
}

const Button = ({
  textName,
  onClick,
  buttonWidth,
  buttonHeight,
  bgColor
}: Props) => {
  return (
    <TouchableHighlight
      style={[
        styles.cardContainer,
        {
          width: wp(buttonWidth),
          height:
            hp(buttonHeight!) || Platform.OS === "android" ? hp(7) : hp(5),
          backgroundColor: bgColor || colors.app_Tint,
          borderColor: bgColor || colors.app_Tint
        }
      ]}
      onPress={onClick}
      underlayColor={colors.app_color_primary}
    >
      <Text style={styles.text}> {textName} </Text>
    </TouchableHighlight>
  );
};
export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
    fontFamily: "sans-serif-condensed",
    letterSpacing: 0.7
  },
  cardContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    borderColor: colors.app_Tint,
    backgroundColor: colors.app_Tint,
    justifyContent: "center"
  }
});
