import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle
} from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import colors from "@/constants/colors";
import React from "react";

interface Props {
  icon?: React.ComponentProps<typeof Icon>["name"];
  image?: ImageSourcePropType;
  name: string;
  description?: string;
  smallVariant?: boolean;
  style: StyleProp<ViewStyle>;
}
const InfoCard: React.FC<Props> = ({
  description,
  icon,
  image,
  name,
  style,
  smallVariant
}) => {
  return (
    <View style={[style, styles.container]}>
      {icon ? (
        <View style={[styles.iconContainer]}>
          <Icon name={icon} size={30} color={colors.app_Tint} />
        </View>
      ) : (
        <Image
          source={image}
          style={
            smallVariant ? styles.smallImageContainer : styles.imageContainer
          }
        />
      )}
      <View>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.subHeader}>{description}</Text>
      </View>
    </View>
  );
};
export default InfoCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  iconContainer: {
    //backgroundColor: colors.app_Tint + "20",
    margin: 5,
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  smallImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    fontFamily: "sans-serif-condensed"
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.description,
    fontFamily: "sans-serif-condensed"
  }
});
