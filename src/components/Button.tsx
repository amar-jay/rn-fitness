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
  inverse?: boolean;
  //bgColor?: string;
}

const Button: React.FC<Props> = ({
  textName,
  onClick,
  buttonWidth,
  buttonHeight,
  //bgColor
  inverse = false
}) => {
  return (
    <TouchableHighlight
      style={[
        styles.cardContainer,
        {
          width: wp(buttonWidth),
          height:
            hp(buttonHeight!) || Platform.OS === "android" ? hp(7) : hp(5),
          backgroundColor: !inverse ? colors.app_Tint : colors.homeBG,
          borderColor: colors.app_Tint
        }
      ]}
      onPress={onClick}
      underlayColor={colors.app_color_primary}
    >
      <Text
        style={[
          styles.text,
          { color: !inverse ? colors.homeBG : colors.app_Tint }
        ]}
      >
        {textName}
      </Text>
    </TouchableHighlight>
  );
};
export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
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
