import React from "react";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import {
  View,
  TouchableHighlight,
  Platform,
  Text,
  StyleSheet
} from "react-native";
import colors from "../constants/colors";
import { wp, hp } from "@/utils/screen-dimension";
interface Props {
  textName: string;
  onClick: () => void;
  buttonWidth: number;
  buttonHeight?: number;
  icon?: React.ComponentProps<typeof Icon>["name"];
  inverse?: boolean;
  //bgColor?: string;
}

const Button: React.FC<Props> = ({
  textName,
  onClick,
  buttonWidth,
  buttonHeight,
  icon,
  //bgColor
  inverse = false,
  ...props
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
          borderColor: colors.app_Tint,
          marginTop: 12
        }
      ]}
      onPress={onClick}
      underlayColor={colors.app_color_primary}
    >
      <View style={styles.buttonContainer}>
        {icon && (
          <Icon
            name={icon}
            size={24}
            style={{ marginRight: 8 }}
            color={!inverse ? colors.homeBG : colors.app_Tint}
          />
        )}

        <Text
          style={[
            styles.text,
            { color: !inverse ? colors.homeBG : colors.app_Tint }
          ]}
        >
          {textName}
        </Text>
      </View>
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
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
